import { Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';

class CollapseList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeElementId: null
    };

    this.setActiveElement = this.setActiveElement.bind(this);
  }

  setActiveElement(element) {
    const { activeElementId } = this.state;
    const { onElementSelected, onActiveElementChanged } = this.props;
    const activeId = activeElementId !== element._id ? element._id : null;
    if (onActiveElementChanged) {
      onActiveElementChanged(activeId);
    } else {
      this.setState({ activeElementId: activeId });
    }
    if (onElementSelected && activeId) {
      onElementSelected(activeId);
    }
  }

  render() {
    const { actions, elements, extraClass, type, header, hoverType, content, activeElementContent, externalActiveElementId } = this.props;
    const { activeElementId } = this.state;
    const Header = header;
    const Content = content;
    const currentActiveElementId = externalActiveElementId || activeElementId;
    return (
      <ul className={`collapse-list collapse-list-${type || 'default'} ${hoverType ? `collapse-list-hover-${hoverType}` : ''} ${extraClass}`}>
        {elements.map((el, i) => (
          <li key={i}>
            <div className={`collapse-list-element ${currentActiveElementId === el._id ? 'active' : ''}`}>
              <div className="collapse-list-header">
                <a onClick={() => this.setActiveElement(el)}>
                  <div className="collapse-list-header-container">
                    <Header element={el} />
                    <Icon name="angle-down" />
                  </div>
                </a>
              </div>
              <div className="collapse-list-content">
                <Content
                  element={activeElementContent || el}
                  actions={actions}
                />
              </div>
            </div>
          </li>
        )
        )}
      </ul>
    )
  }
}

CollapseList.defaultProps = {
  hoverType: null
};

CollapseList.propTypes = {
  hoverType: PropTypes.string
};

export default CollapseList;