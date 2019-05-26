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
    const { elements, extraClass, type, header, content, activeElementContent, externalActiveElementId } = this.props;
    const { activeElementId } = this.state;
    const Header = header;
    const Content = content;
    const currentActiveElementId = externalActiveElementId || activeElementId;
    return (
      <ul className={`collapse-list collapse-list-${type || 'default'} ${extraClass}`}>
        {elements.map((el, i) => (
          <li key={i}>
            <div className={`collapse-list-element ${currentActiveElementId === el._id ? 'active' : ''}`}>
              <div className="collapse-list-header">
                <a onClick={() => this.setActiveElement(el)}>
                  <div className="collapse-list-header-container">
                    <Header element={el} />
                    <i className="fa fa-angle-down" />
                  </div>
                </a>
              </div>
              <div className="collapse-list-content">
                <Content element={activeElementContent || el} />
              </div>
            </div>
          </li>
        )
        )}
      </ul>
    )
  }
}

export default CollapseList;