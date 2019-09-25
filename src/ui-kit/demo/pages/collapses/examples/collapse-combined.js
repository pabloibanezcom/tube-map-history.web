const html = `<CollapseList
  color="primary"
  extraClass="mb-40"
  elements={linesA}
  header={fakeHeader}
  content={fakeContent}
  externalActiveElementId={combinedSelected}
  onActiveElementChanged={this.handleCombinedChanged}
/>
<CollapseList
  color="secondary"
  extraClass="mb-40"
  elements={linesB}
  header={fakeHeader}
  content={fakeContent}
  externalActiveElementId={combinedSelected}
  onActiveElementChanged={this.handleCombinedChanged}
/>
<CollapseList
  elements={linesC}
  header={fakeHeader}
  content={fakeContent}
  externalActiveElementId={combinedSelected}
  onActiveElementChanged={this.handleCombinedChanged}
/>`;

const collapseCombined = {
  id: 'combined',
  name: 'Combined',
  html
};

export default collapseCombined;
