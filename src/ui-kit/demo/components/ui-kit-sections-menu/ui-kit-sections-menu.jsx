import React from 'react';
import { Link } from 'react-scroll';

const UIKitSectionsMenu = ({ examples, apiSections }) => {
  return (
    <div className="ui-kit-sections-menu">
      <h4 className="mb-10">Examples</h4>
      <ul>
        {examples.map(example => (
          <li key={example.id}>
            <Link to={example.id} smooth offset={10} duration={500}>
              {example.name}
            </Link>
          </li>
        ))}
      </ul>
      {apiSections ? (
        <React.Fragment>
          <h4 className="mb-10">API Reference</h4>
          <ul>
            {apiSections.map(section => (
              <li key={section.toLowerCase()}>
                <Link to={section.toLowerCase()} smooth offset={10} duration={500}>
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default UIKitSectionsMenu;
