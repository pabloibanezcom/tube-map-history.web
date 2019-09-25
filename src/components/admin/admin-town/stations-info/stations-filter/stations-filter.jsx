import { Input, LineSelector } from 'components/shared';
import React, { useState } from 'react';

const StationsFilter = ({ draftId, onChangeParams }) => {
  const [currentNameStr, setCurrentNameStr] = useState('');
  const [currentFilter, setCurrentFilter] = useState('');

  const changeFilter = param => {
    const filter = Object.assign({}, currentFilter, param);
    setCurrentFilter(filter);
    onChangeParams({ filter });
  };

  const handleLineChange = line => {
    changeFilter({ line: line._id });
  };

  const handleNameChange = str => {
    if (str.length > 2) {
      changeFilter({ name: str });
    }
    if (str.length <= 2 && currentNameStr.length > 2) {
      changeFilter({ name: '' });
    }
    setCurrentNameStr(str);
  };

  return (
    <div className="stations-filter-basic flex flex-column">
      <div className="flex flex-row">
        <LineSelector draftId={draftId} className="w-180" onChange={handleLineChange} allLinesOpt />
        <Input
          name="filterName"
          extraClass="ml-15"
          placeholder="Search by name..."
          onChange={handleNameChange}
          clearable
        />
      </div>
    </div>
  );
};

export default StationsFilter;
