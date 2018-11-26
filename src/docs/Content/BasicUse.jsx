import React from 'react';
import { codeBasicComp, codeBasicTp } from './CodeSnippets';

const BasicUsage = () => {
  return (
    <>
      <h1>Basic Usage</h1>
      <h3>
        1) Import the tooltip into your stateful react component file (see below).
      </h3>
      <pre>
        <code className="language-javascript">
          import Tooltip from &#39;react-power-tooltip&#39;
        </code>
      </pre>
      <h3>2) Add a hover state &amp; mouse event handler to your component.</h3>
      <pre>
        <code className="language-jsx">
          {codeBasicComp}
        </code>
      </pre>
      <h3>
        3) Add the tooltip inside the target element.
      </h3>
      <pre>
        <code className="language-jsx">
          {codeBasicTp}
        </code>
      </pre>
    </>
  );
};

export default BasicUsage;
