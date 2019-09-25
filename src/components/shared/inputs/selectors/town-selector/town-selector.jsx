import React from 'react';
import Select from '../select/select';
import TownDropdown from './town-dropdown/town-dropdown';
import TownSelected from './town-selected/town-selected';
import selectConfig from './town-selector.config.json';

const TownSelector = ({ towns, onChange }) => {
  return (
    <div className="town-selector">
      {towns.length ? (
        <Select
          config={{ ...selectConfig }}
          options={towns}
          dropdown={TownDropdown}
          selected={TownSelected}
          onChange={onChange}
        />
      ) : null}
    </div>
  );
};

export default TownSelector;
