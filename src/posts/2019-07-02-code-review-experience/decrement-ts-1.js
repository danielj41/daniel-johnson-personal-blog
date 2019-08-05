import React from "react";

import IdeCodeBlock from "../../components/custom-blocks/ide-code-block";

const DecrementTs1 = () => (
  <IdeCodeBlock
    language="ts"
    title=" 📋 decrement.ts (edited) — example"
    code={`function decrement(x) {
  return x - 1;
}
`}
  />
);

export default DecrementTs1;
