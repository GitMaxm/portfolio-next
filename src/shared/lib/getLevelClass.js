export const getLevelClass = (level) => {
  switch (level) {
    case 'уверенный':
      return 'skill-level--confident';
    case 'базовый':
      return 'skill-level--basic';
    case 'практический':
      return 'skill-level--practical';
    default:
      return '';
  }
};