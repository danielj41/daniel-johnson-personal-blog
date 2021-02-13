import React from "react";

import TerminalCodeBlock from "../../components/custom-blocks/terminal-code-block";

const RewordRebase = () => (
  <TerminalCodeBlock
    language="shell"
    prompt="maisie@macbook $"
    title="📁 ~/example — vim — Terminal"
    code={`reword 165cfa2 add incrementByAmount
reword 95c2b9e add decrementByAmount
reword f49cec2 move decrement from utils.js to decrement.ts
reword 2df0152 make it into typescript syntax
reword█e0d33f3 add a dependency

# Rebase 18e678f..e0d33f3 onto 18e678f (5 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
-- INSERT --
`}
  />
);

export default RewordRebase;
