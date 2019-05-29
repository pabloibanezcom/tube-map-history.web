import { Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';

class TabMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuElementWidth: null,
      activeTab: 1,
      menuHeaderStyle: null
    };

    this.menuHeader = React.createRef();

    this.setActiveTab = this.setActiveTab.bind(this);
    this.updateMenuHeaderStyle = this.updateMenuHeaderStyle.bind(this);
  }

  componentDidMount() {
    const { tabs } = this.props;
    const width = this.menuHeader.current.clientWidth / tabs.length
    this.setState({ menuElementWidth: width });
    this.updateMenuHeaderStyle(width);
  }

  setActiveTab(activeTab) {
    this.setState({ activeTab });
    this.updateMenuHeaderStyle(null, activeTab);
  }

  updateMenuHeaderStyle(_menuElementWidth, _activeTab) {
    const { menuElementWidth, activeTab } = this.state;
    const width = _menuElementWidth || menuElementWidth;
    const tab = _activeTab || activeTab;
    if (width) {
      this.setState({ menuHeaderStyle: { left: (tab - 1) * width, width } });
    }
  }

  render() {
    const { tabs, type } = this.props;
    const { activeTab, menuHeaderStyle } = this.state;
    const Content = tabs[activeTab - 1].content;
    return (
      <div className="tab-menu">
        <ul className={`tab-menu-header tab-menu-header-${type}`} ref={this.menuHeader}>
          {tabs.map((tab, i) => {
            return (
              <li key={i} className={`tab-menu-header-item ${i + 1 === activeTab ? 'active' : ''}`}>
                <a onClick={() => this.setActiveTab(i + 1)}>
                  <Icon name={tab.icon} />
                  <span>{tab.name}</span>
                </a>
              </li>
            )
          })}
          <span className="tab-menu-header-indicator" style={menuHeaderStyle} />
        </ul>
        <div className="tab-menu-content">
          <Content />
        </div>
      </div>
    )
  }
}

TabMenu.defaultProps = {
  type: 'secondary',
  tabs: []
};

TabMenu.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  tabs: PropTypes.arrayOf(PropTypes.object)
};

export default TabMenu;