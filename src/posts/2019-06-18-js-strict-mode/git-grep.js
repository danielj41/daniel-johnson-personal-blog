import React from "react";

import TerminalCodeBlock from "../../components/custom-blocks/terminal-code-block";

const GitGrep = () => (
  <TerminalCodeBlock
    language="bash"
    prompt="maisie@macbook $"
    title="📁 ~/web — bash — Terminal"
    code={`maisie@macbook $ git grep "use strict"
maisie@macbook $`}
  />
);

export default GitGrep;
