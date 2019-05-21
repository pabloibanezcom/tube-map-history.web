import React from 'react';
import { Link } from 'react-router-dom';
import * as headerOptions from './headerOptions.json';

const header = (props) => {

  const { options, optionsName, showYear, town, year } = props;

  const _options = options || headerOptions[optionsName];

  return (
    <header className="ms-header ms-header-dark">
      <div className="container container-full">
        <div className="ms-title">
          <a href="index.html">
            <img src="assets/img/demo/logo-header.png" alt="" />
            <span className="ms-logo animated zoomInDown animation-delay-5">T</span>
            <h1 className="animated fadeInRight animation-delay-6">Tube History<span> Map</span></h1>
            <div className="current-year">Year <span className="year">{year}</span></div>
          </a>
        </div>
        <div className="header-right">
          {_options.showShareMenu ? (
            <div className="share-menu">
              <ul className="share-menu-list">
                <li className="animated fadeInRight animation-delay-3">
                  <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-google">
                    <i className="zmdi zmdi-google" />
                  </a>
                </li>
                <li className="animated fadeInRight animation-delay-2">
                  <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-facebook">
                    <i className="zmdi zmdi-facebook" />
                  </a>
                </li>
                <li className="animated fadeInRight animation-delay-1">
                  <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-twitter">
                    <i className="zmdi zmdi-twitter" />
                  </a>
                </li>
              </ul>
              <a href="" onClick={e => { e.preventDefault() }} className="btn-circle btn-circle-primary animated zoomInDown animation-delay-7">
                <i className="zmdi zmdi-share" />
              </a>
            </div>
          ) : null}
          {_options.showYear ? (
            <a href="" onClick={e => { e.preventDefault(); props.onToggleYearSelector(); }} className="toggle-year-link btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal">
              <i className="zmdi zmdi-calendar" />
            </a>
          ) : null}
          {_options.showPrint && town ? (
            <Link to={`/${town.url}/${year}/print`} target="_blank" className="toggle-year-link btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal">
              <i className="fa fa-picture-o" />
            </Link>
          ) : null}
          {_options.showSearch ? (
            <form className="search-form animated zoomInDown animation-delay-9">
              <input id="search-box" type="text" className="search-input" placeholder="Search..." name="q" />
              <label htmlFor="search-box">
                <i className="zmdi zmdi-search" />
              </label>
            </form>
          ) : null}
          {_options.showTowns ? (
            <Link to="/towns" className="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10">
              <i className="fa fa-globe" />
            </Link>
          ) : null}
          {_options.showUser ? (
            <a href="" className="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10">
              <i className="zmdi zmdi-account" />
            </a>
          ) : null}
        </div>
      </div>
      <div className={`current-year ${showYear ? 'shown' : null}`}>
        Year <span className="year">{year}</span>
        {/* <div className="current-year-wrapper">
        
      </div> */}
      </div>
    </header>
  )
}

export default header;
