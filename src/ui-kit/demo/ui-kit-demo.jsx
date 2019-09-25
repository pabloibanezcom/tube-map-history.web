import { Footer, Header } from 'components/shared';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { UIKitMenu } from './components';
import routes from './routes';

const UIKitDemo = ({ history }) => (
  <React.Fragment>
    <Header optionsName="admin" />
    <div className="base-container ui-kit">
      <UIKitMenu currentPage={history.location.pathname.replace('/ui-kit/', '')} />
      <div className="ui-kit-content">{routes}</div>
    </div>
    <Footer />
  </React.Fragment>
);

export default withRouter(UIKitDemo);
