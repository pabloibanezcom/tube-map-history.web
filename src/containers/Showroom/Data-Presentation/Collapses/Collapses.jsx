import { CollapseList } from 'components/shared';
import React from 'react';
import * as lines from './data/lines.json';

const fakeHeader = ({ element }) => {
  return (
    <div>
      <span>{element.name}</span>
    </div>
  )
}

const fakeContent = () => {
  return (
    <div>
      This is fake content
    </div>
  )
}

class Collapses extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      combinedSelected: null
    };
    this.handleCombinedChanged = this.handleCombinedChanged.bind(this);
  }

  handleCombinedChanged(combinedSelected) {
    this.setState((prevState) => { return { combinedSelected: prevState.combinedSelected === combinedSelected ? null : combinedSelected } });
  }

  render() {
    const { combinedSelected } = this.state;
    return (
      <div className="showroom-collapses">
        <h1 className="right-line mb-40">Collapses</h1>
        <div className="row">
          <div className="col">
            <div className="showroom-element">
              <label>Plain</label>
              <CollapseList
                elements={lines.slice(0, 9)}
                header={fakeHeader}
                content={fakeContent}
              />
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>Primary</label>
              <CollapseList
                type="primary"
                elements={lines.slice(0, 9)}
                header={fakeHeader}
                content={fakeContent}
              />
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>Secondary</label>
              <CollapseList
                type="secondary"
                elements={lines.slice(0, 9)}
                header={fakeHeader}
                content={fakeContent}
              />
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>Combined</label>
              <CollapseList
                type="primary"
                extraClass="mb-40"
                elements={lines.slice(0, 4)}
                header={fakeHeader}
                content={fakeContent}
                externalActiveElementId={combinedSelected}
                onActiveElementChanged={this.handleCombinedChanged}
              />
              <CollapseList
                type="secondary"
                extraClass="mb-40"
                elements={lines.slice(4, 9)}
                header={fakeHeader}
                content={fakeContent}
                externalActiveElementId={combinedSelected}
                onActiveElementChanged={this.handleCombinedChanged}
              />
              <CollapseList
                elements={lines.slice(9, 14)}
                header={fakeHeader}
                content={fakeContent}
                externalActiveElementId={combinedSelected}
                onActiveElementChanged={this.handleCombinedChanged}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Collapses;