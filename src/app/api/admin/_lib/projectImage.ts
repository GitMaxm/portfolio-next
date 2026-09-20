import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

import { IMAGE_PIXEL_RATIO, PROJECT_IMAGE_SIZES, PROJECT_IMAGES_DIR } from '@/shared/config';

/** Имена сохранённых файлов — ровно то, что ляжет в поле image записи проекта. */
export interface ISavedImage {
  main: string;
  preview: string;
}

interface ISize {
  width: number;
  height: number;
}

/** Ниже 80 на скриншотах сайтов заметен шум вокруг текста. */
const WEBP_QUALITY = 82;

/** 8 знаков — это 4 млрд вариантов: на портфолио столкновения не случится. */
const HASH_LENGTH = 8;

/**
 * Тип определяем по сигнатуре файла, а не по заголовку из формы: MIME присылает
 * клиент, и подменить его ничего не стоит.
 *
 * Список закрытый, и SVG в него не входит: sharp растеризует его через librsvg,
 * а сам формат умеет тянуть внешние ресурсы — отдавать такое обработчику незачем.
 */
export const isSupportedImage = (bytes: Uint8Array): boolean => {
  const startsWith = (signature: number[], offset = 0) =>
    signature.every((byte, index) => bytes[offset + index] === byte);

  const ascii = (text: string, offset: number) =>
    [...text].every((char, index) => bytes[offset + index] === char.charCodeAt(0));

  return (
    startsWith([0xff, 0xd8, 0xff]) ||
    startsWith([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]) ||
    (ascii('RIFF', 0) && ascii('WEBP', 8)) ||
    ascii('GIF87a', 0) ||
    ascii('GIF89a', 0) ||
    ascii('ftypavif', 4) ||
    ascii('ftypavis', 4)
  );
};

/** Имя генерируем сами: пользовательское могло бы содержать ../ или пробелы. */
const slugify = (source: string): string =>
  source
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);

/**
 * position: 'top' — не центр: у скриншота сайта смысл в первом экране,
 * центральный кроп срезал бы шапку и заголовок.
 */
const toWebp = (bytes: Uint8Array, { width, height }: ISize): Promise<Buffer> =>
  sharp(bytes)
    .resize(width * IMAGE_PIXEL_RATIO, height * IMAGE_PIXEL_RATIO, {
      fit: 'cover',
      position: 'top',
    })
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();

/**
 * Суффикс имени — хэш готовой картинки, а не случайное число: пересняли тот же
 * сайт — получили то же имя, и файл перезаписался вместо того, чтобы лечь
 * рядом третьей копией. Он же работает как cache-buster: при images.unoptimized
 * браузер иначе продолжал бы показывать старую картинку под старым именем.
 */
const fingerprint = (bytes: Uint8Array): string =>
  createHash('sha256').update(bytes).digest('hex').slice(0, HASH_LENGTH);

/**
 * Из одного исходника любого размера делает обе картинки проекта. Ресайз и
 * конвертация в webp — на сервере, чтобы руками этого больше не делать.
 */
export const saveProjectImage = async (
  bytes: Uint8Array,
  sourceName: string,
): Promise<ISavedImage> => {
  const [main, preview] = await Promise.all([
    toWebp(bytes, PROJECT_IMAGE_SIZES.main),
    toWebp(bytes, PROJECT_IMAGE_SIZES.preview),
  ]);

  const base = slugify(sourceName) || 'project';
  const suffix = fingerprint(main);

  const names: ISavedImage = {
    main: `${base}-${suffix}.webp`,
    preview: `${base}-${suffix}-card.webp`,
  };

  const directory = path.join(process.cwd(), 'public', PROJECT_IMAGES_DIR);

  await mkdir(directory, { recursive: true });

  await Promise.all([
    writeFile(path.join(directory, names.main), main),
    writeFile(path.join(directory, names.preview), preview),
  ]);

  return names;
};

/** Базовое имя из пути файла — расширение отбрасываем, его задаёт сам обработчик. */
export const baseNameFromFile = (fileName: string): string => path.parse(fileName).name;
