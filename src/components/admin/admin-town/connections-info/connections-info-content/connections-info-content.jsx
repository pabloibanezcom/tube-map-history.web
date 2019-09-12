import { Badge, Button, InfoElement, LineBadge, Translation } from 'components/shared';
import React from 'react';

const connectionsInfoContent = ({ element, actions }) => {
  const i18nPrefix = 'ADMIN.TOWN.CONNECTIONS';
  return (
    <div className="lines-info-content">
      <div className="row mb-20">
        <div className="col-lg-12 col-md-12">
          <h4 className="secondary right-line right-line-secondary mb-20"><Translation prefix={i18nPrefix} id="CONNECTION_INFO" /></h4>
          <div className="row">
            <div className="col-lg-5">
              <InfoElement
                prefix={i18nPrefix}
                id="LINE"
                value={<LineBadge
                  key={element.line._id}
                  line={element.line}
                />}
              />
            </div>
            <div className="col-lg-3">
              <InfoElement
                prefix={i18nPrefix}
                id="YEAR"
                value={<Badge text={element.year} />}
              />
            </div>
            <div className="col-lg-4">
              <InfoElement
                prefix={i18nPrefix}
                id="DISTANCE"
                value={`${element.distance.toString()} m`}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <InfoElement
                prefix={i18nPrefix}
                id="FROM"
                value={element.stations[0].name}
              />
            </div>
            <div className="col-lg-5">
              <InfoElement
                prefix={i18nPrefix}
                id="TO"
                value={element.stations[1].name}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-sm-10" />
        <div className="col-md-4 mb-sm-10">
          <Button
            color="secondary"
            text={<Translation prefix={i18nPrefix} id="EDIT_CONNECTION" />}
            block
            outline
            onClick={() => actions.onEditConnection(element)}
          />
        </div>
        <div className="col-md-4 mb-sm-10">
          <Button
            color="danger"
            text={<Translation prefix={i18nPrefix} id="DELETE_CONNECTION" />}
            block
            outline
            onClick={() => actions.onDeleteConnection(element)}
          />
        </div>
      </div>
    </div>
  )
}

export default connectionsInfoContent;