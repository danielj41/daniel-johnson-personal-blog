import React from "react";

import TerminalCodeBlock from "../../components/custom-blocks/terminal-code-block";

const CommitMessageEditor = () => (
  <TerminalCodeBlock
    language="markdown"
    prompt="maisie@macbook $"
    title="📁 ~/example — vim — Terminal"
    code={`Fix blog post header being too small in IE11
 
Problem
---
 
In IE11, the container doesn't keep its 100px minimum height
when the content is smaller. It looks fine in other browsers.
 
Cause
---
 
IE11 flexbox containers with min-height and align-items:center
don't work as expected:
https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101414/
 
Solution
---
 
Use workaround described here
https://github.com/philipwalton/flexbugs/issues/231#issuecomment-362790042
 
Create an ::after pseudo-element with height: 100px as a child
of the flex container.█
`}
  />
);

export default CommitMessageEditor;
