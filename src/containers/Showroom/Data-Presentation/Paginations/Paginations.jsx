import { Pagination } from 'components/shared';
import React from 'react';

const mockPagination = {
  page: 1,
  pages: 10
}

class Paginations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page1: null,
      page2: null,
      page3: null,
      page4: null,
      page5: null
    }
  }

  handlePaginationChange(paginationId, newPagination) {
    this.setState({ [paginationId]: newPagination });
  }

  render() {
    const { page1, page2, page3, page4, page5 } = this.state;
    return (
      <div className="showroom-loading-spinner">
        <h1 className="right-line mb-4">Pagination</h1>
        <div className="row">
          <div className="col-6">
            <div className="showroom-element">
              <label>Primary</label>
              <Pagination
                pagination={mockPagination}
                onPageChange={(page) => this.handlePaginationChange('page1', page)}
              />
              <div className="showroom-result">
                <span>{page1 ? `Page selected: ${page1}` : ''}</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="showroom-element">
              <label>Secondary</label>
              <Pagination
                color="secondary"
                pagination={mockPagination}
                onPageChange={(page) => this.handlePaginationChange('page2', page)}
              />
              <div className="showroom-result">
                <span>{page2 ? `Page selected: ${page2}` : ''}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="showroom-element">
              <label>Primary background</label>
              <Pagination
                background="primary"
                pagination={mockPagination}
                onPageChange={(page) => this.handlePaginationChange('page3', page)}
              />
              <div className="showroom-result">
                <span>{page3 ? `Page selected: ${page3}` : ''}</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="showroom-element">
              <label>Secondary background</label>
              <Pagination
                background="secondary"
                pagination={mockPagination}
                onPageChange={(page) => this.handlePaginationChange('page4', page)}
              />
              <div className="showroom-result">
                <span>{page4 ? `Page selected: ${page4}` : ''}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="showroom-element">
              <label>Small size</label>
              <Pagination
                size="sm"
                color="secondary"
                pagination={mockPagination}
                onPageChange={(page) => this.handlePaginationChange('page5', page)}
              />
              <div className="showroom-result">
                <span>{page5 ? `Page selected: ${page5}` : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Paginations;