import React from 'react';
import { Link } from "react-router-dom";

const townCard = (props) => {
  return (
    <Link to={`/${props.town.url}/2019`}>
      <div className="town-card card animated fadeIn animation-delay-5">
        <div className="img-container">
          <div className="zoom-img">
            <img src={require(`../../../assets/img/towns/${props.town.url}.jpg`)} alt={props.town.name} className="img-fluid city-img" />
            {/* <img src={require(`../../../assets/img/towns/london.jpg`)} alt="" className="img-fluid city-img" /> */}
          </div>
        </div>

        <div className="card-body overflow-hidden text-center town-container">
          <div className="town-alias">
            <img src={require(`../../../assets/img/towns/${props.town.url}_logo.png`)} alt={props.town.name} />
            <span>{props.town.alias}</span>
          </div>
          <div className="town-header">
            <h3 className="town-name">{props.town.name}</h3>
            <h4 className="town-country">{props.town.country}</h4>
          </div>
          <div className="town-data">
            <div className="town-year">
              <div className="town-data-label left">Year</div>
              <div className="town-data-value right">{props.town.year}</div>
              <div className="clearfix"></div>
            </div>
            {/* <div className="town-alias">
              <div className="town-data-label left">Alias</div>
              <div className="town-data-value right">{props.town.alias}</div>
              <div className="clearfix"></div>
            </div> */}
            <div className="town-lines">
              <div className="town-data-label left">Lines</div>
              <div className="town-data-value right">{props.town.linesAmount}</div>
              <div className="clearfix"></div>
            </div>
            <div className="town-stations">
              <div className="town-data-label left">Stations</div>
              <div className="town-data-value right">{props.town.stationsAmount}</div>
              <div className="clearfix"></div>
            </div>
            {/* <button class="btn btn-raised btn-secondary btn-block no-text-transform">View map</button> */}
          </div>

        </div>
      </div >
    </Link>
  );
}

export default townCard;