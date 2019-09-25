import React from 'react';

const headers = () => {
  return (
    <div className="showroom-headers">
      <h1 className="right-line mb-40">Headers</h1>

      <h1 className="right-line mb-20">This is a header H1</h1>
      <h1 className="primary right-line mb-20">This is a primary header H1</h1>
      <h1 className="primary right-line right-line-secondary mb-20">
        This is a primary header H1 with secondary right line
      </h1>
      <h1 className="secondary right-line mb-20">This is a secondary header H1</h1>
      <h1 className="secondary right-line right-line-primary mb-20">
        This is a secondary header H1 with primary right line
      </h1>
      <h1 className="mb-40">This is a header H1 without right line</h1>
      <h2 className="right-line mb-20">This is a header H2</h2>
      <h3 className="right-line mb-20">This is a header H3</h3>
      <h4 className="right-line mb-20">This is a header H4</h4>
      <h5 className="right-line mb-20">This is a header H5</h5>
      <h6 className="right-line mb-20">This is a header H6</h6>
    </div>
  );
};

export default headers;
