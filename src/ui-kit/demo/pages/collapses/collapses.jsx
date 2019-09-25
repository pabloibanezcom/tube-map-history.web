import React from 'react';
import { UIKitDemoElement, UIKitSectionsMenu } from '../../components';
import lines from './data/lines.json';
import collapseCombined from './examples/collapse-combined';
import collapsePlain from './examples/collapse-plain';
import collapsePrimary from './examples/collapse-primary';
import collapseSecondary from './examples/collapse-secondary';

const examples = [collapsePlain, collapsePrimary, collapseSecondary, collapseCombined];

const fakeHeader = ({ element }) => {
  return (
    <div>
      <span>{element.name}</span>
    </div>
  );
};

const fakeContent = () => {
  return <div>This is fake content</div>;
};

const bindings = {
  lines: lines.slice(0, 9),
  linesA: lines.slice(0, 4),
  linesB: lines.slice(4, 9),
  linesC: lines.slice(9, 14),
  fakeHeader,
  fakeContent
};

const Collapses = () => (
  <div>
    <h1 className="right-line mb-40">Collapses</h1>
    <div className="row justify-content-end">
      <div className="col-lg-6">
        {examples.map(example => (
          <UIKitDemoElement
            key={example.id}
            component="CollapseList"
            example={example}
            bindings={bindings}
            options={{ fullWidth: true }}
          />
        ))}
      </div>
      <div className="col-lg-4">
        <UIKitSectionsMenu examples={examples} apiSections={['Options']} />
      </div>
    </div>
  </div>
);

export default Collapses;
