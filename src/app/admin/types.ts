export interface IAdminErrorProps {
  error: Error & { digest?: string };
  /** Перезапрашивает данные и перерисовывает сегмент — см. error.js в доке Next 16. */
  retry: () => void;
}
