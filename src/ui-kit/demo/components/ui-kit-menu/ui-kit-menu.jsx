import React from 'react';
import { Link } from 'react-router-dom';
import menuElements from './ui-kit-menu.data.json';

const UIKitMenu = ({ currentPage }) => {
  return (
    <div className="ui-kit-menu flex flex-column">
      <ul>
        <li className="group-title">UI components</li>
        {menuElements.map(el => (
          <li key={el.url} className={`link-element ${currentPage === el.url ? 'active' : ''}`}>
            <Link to={`/ui-kit/${el.url}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UIKitMenu;
