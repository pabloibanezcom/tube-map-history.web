import React from 'react';

const header = (props) => {
  return <header className="ms-header ms-header-dark">
    <div className="container container-full">
      <div className="ms-title">
        <a href="index.html">
          <img src="assets/img/demo/logo-header.png" alt="" />
          <span className="ms-logo animated zoomInDown animation-delay-5">T</span>
          <h1 className="animated fadeInRight animation-delay-6">Tube History
            <span> Map</span>
          </h1>
        </a>
      </div>
      <div className="header-right">
        <div className="share-menu">
          <ul className="share-menu-list">
            <li className="animated fadeInRight animation-delay-3">
              <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-google">
                <i className="zmdi zmdi-google"></i>
              </a>
            </li>
            <li className="animated fadeInRight animation-delay-2">
              <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-facebook">
                <i className="zmdi zmdi-facebook"></i>
              </a>
            </li>
            <li className="animated fadeInRight animation-delay-1">
              <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-twitter">
                <i className="zmdi zmdi-twitter"></i>
              </a>
            </li>
          </ul>
          <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-circle-primary animated zoomInDown animation-delay-7">
            <i className="zmdi zmdi-share"></i>
          </a>
        </div>
        <a href="" onClick={e => { e.preventDefault(); props.onToggleYearSelector(); }} className="toggle-year-link btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" >
          <i className="zmdi zmdi-calendar"></i>
        </a>
        <form className="search-form animated zoomInDown animation-delay-9">
          <input id="search-box" type="text" className="search-input" placeholder="Search..." name="q" />
          <label htmlFor="search-box">
            <i className="zmdi zmdi-search"></i>
          </label>
        </form>
        <a href="" onClick={e => { e.preventDefault(); props.onToggleSideBar(); }} className="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10">
          <i className="zmdi zmdi-menu"></i>
        </a>
      </div>
    </div>
  </header>
}

export default header;
