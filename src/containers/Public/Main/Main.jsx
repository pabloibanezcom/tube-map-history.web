import { YearSelector } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initMapDraftStart, initMapStart } from 'store/public/actions';
import MapWrapper from '../MapWrapper/MapWrapper';

class Main extends React.Component {
  componentDidMount() {
    const { match, onInit, onInitDraft } = this.props;
    if (match.params.draftId) {
      onInitDraft(match.params.draftId, parseInt(match.params.year, 10));
    } else {
      onInit(match.params.town, parseInt(match.params.year, 10));
    }
  }

  render() {
    return (
      <div>
        <YearSelector year="2019" showYearSelector onYearChange={year => console.log(year)} />
        <MapWrapper mode="main" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    town: state.public.town
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInit: (townUrl, year) => dispatch(initMapStart(townUrl, year)),
    onInitDraft: (dratfId, year) => dispatch(initMapDraftStart(dratfId, year))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Main));
