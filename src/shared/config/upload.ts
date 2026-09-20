/** Папка в public, куда складываются картинки проектов. */
export const PROJECT_IMAGES_DIR = 'img/projects';

export const PROJECT_IMAGES_URL = `/${PROJECT_IMAGES_DIR}/`;

export const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

/**
 * Размеры вёрстки: те же числа стоят в width/height у <Image>
 * в карточке и на странице проекта.
 */
export const PROJECT_IMAGE_SIZES = {
  /** Картинка на странице проекта. */
  main: { width: 800, height: 600 },
  /** Обложка в списке проектов. */
  preview: { width: 370, height: 297 },
} as const;

/**
 * В файл пишем вдвое больше: на retina-экране один пиксель вёрстки — это четыре
 * настоящих, и картинка ровно по размеру вёрстки выглядит мыльной. Оптимизацию
 * картинок Next не делает (images.unoptimized), плотность закладываем сами.
 */
export const IMAGE_PIXEL_RATIO = 2;

/**
 * SVG сюда сознательно не входит: файл лёг бы в public и отдавался с того же
 * домена, а внутри SVG исполняется скрипт — это готовый хранимый XSS.
 */
export const ACCEPTED_IMAGE_TYPES: readonly string[] = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/gif',
];

/** Значение для атрибута accept у input[type=file]. */
export const IMAGE_ACCEPT = ACCEPTED_IMAGE_TYPES.join(',');
