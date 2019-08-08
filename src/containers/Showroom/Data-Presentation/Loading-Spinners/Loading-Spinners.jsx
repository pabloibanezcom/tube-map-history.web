import { Button, LoadingSpinner } from 'components/shared';
import React from 'react';

class LoadingSpinners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading1: null,
      loading2: null,
      loading3: null,
      loading4: null,
      loading5: null
    };
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  toggleLoading(loadingId) {
    this.setState(prevState => { return { [loadingId]: !prevState[loadingId] } });
  }

  render() {
    const { loading1, loading2, loading3, loading4, loading5 } = this.state;
    return (
      <div className="showroom-loading-spinner">
        <h1 className="right-line mb-4">Loading spinner</h1>
        <div className="row">
          <div className="col">
            <div className="showroom-element">
              <label>Light background</label>
              <div className="pos-relative">
                <LoadingSpinner loading={loading1} />
                <div className="showroom-sample-div" />
              </div>
              <Button
                text={loading1 ? 'Stop spinner' : 'Start spinner'}
                color="secondary"
                extraClass="mt-30"
                onClick={() => this.toggleLoading('loading1')}
              />
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>Dark background</label>
              <div className="pos-relative">
                <LoadingSpinner
                  background="dark"
                  loading={loading2}
                />
                <div className="showroom-sample-div" />
              </div>
              <Button
                text={loading2 ? 'Stop spinner' : 'Start spinner'}
                color="secondary"
                extraClass="mt-30"
                onClick={() => this.toggleLoading('loading2')}
              />
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>Secondary spinner</label>
              <div className="pos-relative">
                <LoadingSpinner
                  color="secondary"
                  loading={loading3}
                />
                <div className="showroom-sample-div" />
              </div>
              <Button
                text={loading3 ? 'Stop spinner' : 'Start spinner'}
                color="secondary"
                extraClass="mt-30"
                onClick={() => this.toggleLoading('loading3')}
              />
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>Inverse spinner</label>
              <div className="pos-relative">
                <LoadingSpinner
                  inverse
                  loading={loading4}
                />
                <div className="showroom-sample-div" />
              </div>
              <Button
                text={loading4 ? 'Stop spinner' : 'Start spinner'}
                color="secondary"
                extraClass="mt-30"
                onClick={() => this.toggleLoading('loading4')}
              />
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>Shadow without spinner</label>
              <div className="pos-relative">
                <LoadingSpinner
                  inverse
                  noSpinner
                  loading={loading5}
                />
                <div className="showroom-sample-div" />
              </div>
              <Button
                text={loading4 ? 'Stop spinner' : 'Start spinner'}
                color="secondary"
                extraClass="mt-30"
                onClick={() => this.toggleLoading('loading5')}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoadingSpinners;