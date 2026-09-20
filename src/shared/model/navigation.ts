export interface INavigationLink {
  href: string;
  label: string;
  title: string;
  /** Не показывать в проде: ссылки на админку посетителю видеть незачем. */
  devOnly?: boolean;
}
