import React from 'react';
import { UIKitDemoElement, UIKitPropsTable, UIKitSectionsMenu } from '../../components';
import properties from './button.properties.json';
import buttonInverse from './examples/button-inverse';
import buttonLarge from './examples/button-large';
import buttonLight from './examples/button-light';
import buttonLink from './examples/button-link';
import buttonNoBlock from './examples/button-no-block';
import buttonNoTextTransformation from './examples/button-no-text-transformation';
import buttonOutline from './examples/button-outline';
import buttonPrimary from './examples/button-primary';
import buttonSecondary from './examples/button-secondary';
import buttonWithIcon from './examples/button-with-icon';

const examples = [
  buttonPrimary,
  buttonSecondary,
  buttonLight,
  buttonOutline,
  buttonInverse,
  buttonLarge,
  buttonNoTextTransformation,
  buttonNoBlock,
  buttonWithIcon,
  buttonLink
];

const Buttons = () => (
  <div>
    <h1 className="right-line mb-40">Buttons</h1>
    <div className="row justify-content-end">
      <div className="col-lg-6">
        {examples.map(example => (
          <UIKitDemoElement key={example.id} component="Button" example={example} />
        ))}
        <UIKitPropsTable properties={properties} />
      </div>
      <div className="col-lg-4">
        <UIKitSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
      </div>
    </div>
  </div>
);

export default Buttons;
