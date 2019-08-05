import React from "react";

import IdeCodeBlock from "../../components/custom-blocks/ide-code-block";

const DecrementTs2 = () => (
  <IdeCodeBlock
    language="ts"
    title=" 📋 decrement.ts (edited) — example"
    code={`function decrement(x: number): number {
  return x - 1;
}
`}
  />
);

export default DecrementTs2;
