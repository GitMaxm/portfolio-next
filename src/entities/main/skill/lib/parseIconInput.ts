import { SKILL_ICON_VIEW_BOX } from '../config/skillOptions';

export interface IParsedIcon {
  path: string;
  viewBox: string;
}

/** Атрибут d="…" или d='…'. \b не даёт зацепиться за id=, data-…, stroke-dasharray. */
const D_ATTR_RE = /\bd\s*=\s*["']([^"']+)["']/gi;
const VIEW_BOX_RE = /\bviewBox\s*=\s*["']([^"']+)["']/i;

/** Принимает целиком <svg> (как копирует simpleicons.org) либо голую строку пути. */
export const parseIconInput = (input: string): IParsedIcon => {
  const value = input.trim();

  if (!value.includes('<svg')) {
    return { path: value, viewBox: SKILL_ICON_VIEW_BOX };
  }

  const paths = [...value.matchAll(D_ATTR_RE)].map(match => match[1].trim());
  const viewBox = value.match(VIEW_BOX_RE)?.[1]?.trim();

  return {
    path: paths.join(' '),
    viewBox: viewBox || SKILL_ICON_VIEW_BOX,
  };
};
