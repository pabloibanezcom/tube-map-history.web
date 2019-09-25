import { Badge, Button, CollapseList, CountryLabel, Panel } from 'components/shared';

const getComponentsForParser = componentsString => {
  const componentNames = componentsString.split(' ');
  const result = {};
  componentNames.forEach(name => {
    result[name] = getComponentFromName(name);
  });
  return result;
};

const getComponentFromName = componentName => {
  switch (componentName) {
    case 'Badge':
      return Badge;
    case 'Button':
      return Button;
    case 'CollapseList':
      return CollapseList;
    case 'CountryLabel':
      return CountryLabel;
    case 'Panel':
      return Panel;
    default:
      return null;
  }
};

export default getComponentsForParser;
