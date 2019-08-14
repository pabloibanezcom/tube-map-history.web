import { Badge, Button, InfoElement, Translation } from 'components/shared';
import React from 'react';

const linesInfoContent = ({ element, actions }) => {
  const i18nPrefix = 'ADMIN.TOWN.LINES';
  return (
    <div className="lines-info-content">
      <div className="row mb-20">
        <div className="col-lg-8 col-md-8">
          <h4 className="secondary right-line right-line-secondary mb-20"><Translation prefix={i18nPrefix} id="LINE_INFO" /></h4>
          <div className="row">
            <div className="col-lg-8">
              <InfoElement
                prefix={i18nPrefix}
                id="NAME"
                value={element.name}
              />
              <InfoElement
                prefix={i18nPrefix}
                id="YEAR"
                value={element.year && <Badge text={element.year} />}
              />
              <InfoElement
                prefix={i18nPrefix}
                id="STATIONS"
                value={element.stationsAmount}
              />
              <InfoElement
                prefix={i18nPrefix}
                id="DISTANCE"
                value={element.distance}
              />
            </div>
            <div className="col-lg-4">
              <InfoElement
                prefix={i18nPrefix}
                id="COLOR"
                value={<Badge backgroundColor={element.colour} text={element.colour} />}
              />
              <InfoElement
                prefix={i18nPrefix}
                id="FONT"
                value={<Badge backgroundColor={element.fontColour} text={element.fontColour} border />}
              />
            </div>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-sm-10">
          <Button
            fontColor={element.fontColour}
            backgroundColor={element.colour}
            hover="primary"
            block
            text={<Translation prefix={i18nPrefix} id="VIEW_STATIONS" />}
            onClick={() => actions.viewLineStations(element)}
          />
        </div>
        <div className="col-md-4 mb-sm-10">
          <Button
            color="secondary"
            text={<Translation prefix={i18nPrefix} id="EDIT_LINE" />}
            block
            outline
            onClick={() => actions.onEditLine(element)}
          />
        </div>
        <div className="col-md-4 mb-sm-10">
          <Button
            color="danger"
            text={<Translation prefix={i18nPrefix} id="DELETE_LINE" />}
            block
            outline
            onClick={() => actions.onDeleteLine(element)}
          />
        </div>
      </div>
    </div>
  )
}

export default linesInfoContent;