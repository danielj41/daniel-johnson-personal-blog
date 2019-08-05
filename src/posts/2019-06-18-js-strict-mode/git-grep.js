import React from "react";

import TerminalCodeBlock from "../../components/custom-blocks/terminal-code-block";

const GitGrep = () => (
  <TerminalCodeBlock
    language="bash"
    prompt="daniel@macbook $"
    title="📁 ~/web — bash — Terminal"
    code={`daniel@macbook $ git grep "use strict"
daniel@macbook $`}
  />
);

export default GitGrep;
