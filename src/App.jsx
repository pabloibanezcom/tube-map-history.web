import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import intlEN from 'react-intl/locale-data/en';
import intlES from 'react-intl/locale-data/es';
import { withRouter } from 'react-router-dom';
import flattenMessages from 'util/flattenMessages';
import routes from './routes';

addLocaleData([...intlEN, ...intlES]);

class App extends Component {

  constructor(props) {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = 'en';
      localStorage.setItem('lang', lang);
    }
    super(props);
    this.state = {
      locale: lang,
      messages: flattenMessages(require(`./i18n/${lang}.json`))
    }
  }

  changeLanguage(lang) {
    this.setState({ locale: lang, messages: flattenMessages(require(`./i18n/${lang}.json`)) });
  }

  render() {
    const { locale, messages } = this.state;
    return (
      <IntlProvider key={locale} locale={locale} messages={messages}>
        <div className="ms-site-container">
          {routes}
        </div>
      </IntlProvider>
    );
  }
}

export default withRouter(App);
