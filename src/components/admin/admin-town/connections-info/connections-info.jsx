import { Button, CollapseList } from 'components/shared';
import React from 'react';
import ConnectionsFilter from './connections-filter/connections-filter';
import ConnectionsInfoContent from './connections-info-content/connections-info-content';
import ConnectionsInfoHeader from './connections-info-header/connections-info-header';

const connectionsInfo = props => {
  const {
    draftId,
    connections,
    onAddConnection,
    onEditConnection,
    onDeleteConnection,
    onChangeParams
  } = props;
  return (
    <div className="connections-info">
      <div className="flex flex-row flex-space-between mb-30">
        <ConnectionsFilter draftId={draftId} onChangeParams={onChangeParams} />
        <Button text="Add connection" icon="add" outline onClick={onAddConnection} />
      </div>
      <CollapseList
        elements={connections}
        hoverType="secondary"
        header={ConnectionsInfoHeader}
        content={ConnectionsInfoContent}
        actions={{ onEditConnection, onDeleteConnection }}
        {...props}
      />
    </div>
  );
};

export default connectionsInfo;
