import { Panel } from 'components/shared';
import React from 'react';

const panels = () => {
  return (
    <div className="showroom-buttons">
      <h1 className="right-line mb-4">Panels</h1>
      <div className="row">
        <div className="col-4">
          <div className="showroom-element">
            <label>White</label>
            <Panel>This is a panel</Panel>
          </div>
        </div>
        <div className="col-4">
          <div className="showroom-element">
            <label>Primary</label>
            <Panel background="primary">This is a panel</Panel>
          </div>
        </div>
        <div className="col-4">
          <div className="showroom-element">
            <label>Secondary</label>
            <Panel background="secondary">This is a panel</Panel>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="showroom-element">
            <label>With primary header</label>
            <Panel header="Header primary" headerColor="primary">
              This is a panel
            </Panel>
          </div>
        </div>
        <div className="col-4">
          <div className="showroom-element">
            <label>With secondary header</label>
            <Panel header="Header secondary" headerColor="secondary">
              This is a panel
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default panels;
