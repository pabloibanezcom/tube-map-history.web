import React from 'react';

// eslint-disable-next-line no-unused-vars
const UIKitPropsTable = ({ properties }) => {
  return (
    <div className="ui-kit-props-table mt-60">
      {properties.options ? (
        <div>
          <h2 name="options" className="mb-20">
            Options
          </h2>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(properties.options).map(propName => (
                <tr key={propName}>
                  <td>{propName}</td>
                  <td>{getTypeLabel(properties.options[propName].type)}</td>
                  <td>{getRequiredLabel(properties.options[propName].isRequired)}</td>
                  <td>{properties.options[propName].default}</td>
                  <td>{properties.options[propName].description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {properties.methods ? (
        <div className="mt-40">
          <h2 name="methods" className="mb-20">
            Methods
          </h2>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(properties.methods).map(methodName => (
                <tr key={methodName}>
                  <td>{methodName}</td>
                  <td>{properties.methods[methodName].description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

const getTypeLabel = type => {
  const getTypeStr = typeStr => {
    if (typeStr === 'string' || typeStr === 'number' || typeStr === 'bool') {
      return <span className="primary-type">{typeStr}</span>;
    }
    return <span className="custom-type">{typeStr}</span>;
  };

  if (!Array.isArray(type)) {
    return getTypeStr(type);
  }
  const result = (
    <div className="flex flex-column">
      {type.map(t => (
        <React.Fragment key={t}>{getTypeStr(t)}</React.Fragment>
      ))}
    </div>
  );
  return result;
};

const getRequiredLabel = isRequired => {
  return isRequired ? (
    <span className="required-yes">yes</span>
  ) : (
    <span className="required-no">no</span>
  );
};

export default UIKitPropsTable;
