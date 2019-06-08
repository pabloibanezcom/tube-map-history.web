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
    id: 'tabA',
    name: 'Element A',
    icon: 'person',
    content: mockComponentA
  },
  {
    id: 'tabB',
    name: 'Element B',
    icon: 'person',
    content: mockComponentB
  },
  {
    id: 'tabC',
    name: 'Element C',
    icon: 'person',
    content: mockComponentC
  },
  {
    id: 'tabD',
    name: 'Element D',
    icon: 'person',
    content: mockComponentD
  }
];

class Tabs extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentTab: null
    }

    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab(currentTab) {
    this.setState({ currentTab });
  }

  render() {
    const { currentTab } = this.state;
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

        <div className="row">
          <div className="col-6">
            <div className="showroom-element">
              <label>Primary with Secondary panel</label>
              <TabMenu
                type="primary"
                panel="secondary"
                tabs={mockTabs}
              />
            </div>
          </div>
          <div className="col-6">
            <div className="showroom-element">
              <label>Secondary with primary panel</label>
              <TabMenu
                type="secondary"
                panel="primary"
                tabs={mockTabs}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="showroom-element">
              <label>Using onTabChange</label>
              <TabMenu
                type="primary"
                tabs={mockTabs}
                onTabChange={this.setActiveTab}
              />
              <div className="showroom-result">
                <span>{currentTab ? `Tab selected: ${currentTab}` : ''}</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="showroom-element">
              <label>Setting initial active tab</label>
              <TabMenu
                type="primary"
                tabs={mockTabs}
                activeTab={mockTabs[2].id}
              />
              <div className="showroom-result">
                <span>{currentTab ? `Tab selected: ${currentTab}` : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tabs;