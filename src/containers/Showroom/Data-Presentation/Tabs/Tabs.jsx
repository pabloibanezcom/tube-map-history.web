import { TabMenu } from 'components/shared';
import React from 'react';

const mockComponentA = () => {
  return (
    <div>This is tab A</div>
  )
}

const mockComponentB = () => {
  return (
    <div>This is tab B</div>
  )
}

const mockComponentC = () => {
  return (
    <div>This is tab C</div>
  )
}

const mockComponentD = () => {
  return (
    <div>This is tab D</div>
  )
}

const mockTabs = [
  {
    name: 'Element A',
    icon: 'person',
    content: mockComponentA
  },
  {
    name: 'Element B',
    icon: 'person',
    content: mockComponentB
  },
  {
    name: 'Element C',
    icon: 'person',
    content: mockComponentC
  },
  {
    name: 'Element D',
    icon: 'person',
    content: mockComponentD
  }
];

const tabs = () => {
  return (
    <div className="showroom-buttons">
      <h1 className="right-line mb-4">Tabs</h1>
      <div className="row">
        <div className="col-6">
          <div className="showroom-element">
            <label>Primary</label>
            <TabMenu
              type="primary"
              tabs={mockTabs}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="showroom-element">
            <label>Secondary</label>
            <TabMenu
              type="secondary"
              tabs={mockTabs}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default tabs;