import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import JsxParser from 'react-jsx-parser';
import getComponentsForParser from '../../util/getComponentsForParser';

require('codemirror/mode/xml/xml');

const UIKitDemoElement = ({ component, example: { id, name, html, multi }, bindings, options }) => {
  const [showCode, setShowCode] = useState(false);

  const copyToClipboard = () => {
    console.log('Copied');
    document.execCommand('copy', false, html);
  };

  return (
    <div name={id} className="ui-kit-demo-element">
      <h3 className="mb-10">{name}</h3>
      <div className="ui-kit-demo-element-container">
        <div
          className={`ui-kit-demo-element-show ${options && options.fullWidth ? 'fullWidth' : ''} ${
            multi ? 'multi' : ''
          }`}
        >
          <JsxParser
            bindings={bindings}
            components={getComponentsForParser(component)}
            jsx={`<div>${html}</div>`}
          />
        </div>
        <div className="ui-kit-demo-element-code">
          <button
            type="button"
            className="ui-kit-demo-show-code-btn"
            onClick={() => setShowCode(!showCode)}
          >
            {!showCode ? 'Show code' : 'Hide code'}
          </button>
          <div className={`ui-kit-demo-element-codemirror ${showCode ? 'shown' : ''}`}>
            <CodeMirror
              value={html}
              options={{
                mode: 'xml',
                theme: 'material',
                lineNumbers: false,
                smartIndent: true,
                indentWithTabs: true,
                readOnly: true
              }}
            />
            <a className="ui-kit-demo-element-copy" onClick={copyToClipboard}>
              Copy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIKitDemoElement;
