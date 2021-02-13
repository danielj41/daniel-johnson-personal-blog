import React from "react";

import TerminalCodeBlock from "../../components/custom-blocks/terminal-code-block";

const ResetAndPatchDiff = () => (
  <TerminalCodeBlock
    language="diff"
    prompt="maisie@macbook $"
    title="📁 ~/example — git diff — Terminal"
    code={`maisie@macbook $ git diff
 
diff --git a/src/utils.js b/src/utils.js
index 91867c3..892aa17 100644
--- a/src/utils.js
+++ b/src/utils.js
@@ -2,11 +2,21 @@ function increment(x) {
   return x + 1;
 }

+function incrementByAmount(x, amount) {
+  return x + amount;
+}
+
 function decrement(x) {
   return x - 1;
 }

+function decrementByAmount(x, amount) {
+  return x - amount;
+}
+
:
`}
  />
);

export default ResetAndPatchDiff;
