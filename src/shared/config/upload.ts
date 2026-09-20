export const PROJECT_IMAGES_DIR = 'img/projects';

export const PROJECT_IMAGES_URL = `/${PROJECT_IMAGES_DIR}/`;

export const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

export const PROJECT_IMAGE_SIZES = {

  main: { width: 800, height: 600 },

  preview: { width: 370, height: 297 },
} as const;

export const IMAGE_PIXEL_RATIO = 2;

export const ACCEPTED_IMAGE_TYPES: readonly string[] = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/gif',
];

export const IMAGE_ACCEPT = ACCEPTED_IMAGE_TYPES.join(',');
