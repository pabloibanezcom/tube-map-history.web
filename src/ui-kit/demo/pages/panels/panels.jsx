import React from 'react';
import { UIKitDemoElement, UIKitPropsTable, UIKitSectionsMenu } from '../../components';
import properties from './panel.properties.json';
import panelPrimary from './sections/panel-primary';
import panelPrimaryHeader from './sections/panel-primary-header';
import panelSecondary from './sections/panel-secondary';
import panelSecondaryHeader from './sections/panel-secondary-header';
import panelWhite from './sections/panel-white';

const Panels = () => (
  <div>
    <h1 className="right-line mb-40">Panels</h1>
    <div className="row justify-content-end">
      <div className="col-lg-6">
        <UIKitDemoElement component="Panel" section={panelWhite} />
        <UIKitDemoElement component="Panel" section={panelPrimary} />
        <UIKitDemoElement component="Panel" section={panelSecondary} />
        <UIKitDemoElement component="Panel" section={panelPrimaryHeader} />
        <UIKitDemoElement component="Panel" section={panelSecondaryHeader} />
        <UIKitPropsTable properties={properties} />
      </div>
      <div className="col-lg-4">
        <UIKitSectionsMenu
          sections={[
            panelWhite,
            panelPrimary,
            panelSecondary,
            panelPrimaryHeader,
            panelSecondaryHeader
          ]}
        />
      </div>
    </div>
  </div>
);

export default Panels;
