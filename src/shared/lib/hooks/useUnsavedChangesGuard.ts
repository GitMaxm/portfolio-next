import { useEffect } from 'react';

export const UNSAVED_CHANGES_MESSAGE = 'Есть несохранённые изменения. Уйти без сохранения?';

const isInternalNavigation = (event: MouseEvent, link: HTMLAnchorElement): boolean => {
  if (event.defaultPrevented || event.button !== 0) {
    return false;
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }

  if (link.target && link.target !== '_self') {
    return false;
  }

  if (link.hasAttribute('download')) {
    return false;
  }

  const url = new URL(link.href, window.location.href);

  return url.origin === window.location.origin && url.href !== window.location.href;
};

export const useUnsavedChangesGuard = (isDirty: boolean) => {
  useEffect(() => {
    if (!isDirty) {
      return;
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a[href]');

      if (!(link instanceof HTMLAnchorElement) || !isInternalNavigation(event, link)) {
        return;
      }

      if (!window.confirm(UNSAVED_CHANGES_MESSAGE)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', handleClick, true);
    };
  }, [isDirty]);
};
