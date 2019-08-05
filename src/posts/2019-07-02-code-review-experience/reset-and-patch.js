import React from "react";

import TerminalCodeBlock from "../../components/custom-blocks/terminal-code-block";

const ResetAndPatch = () => (
  <TerminalCodeBlock
    language="diff"
    prompt="daniel@macbook $"
    title="📁 ~/example — bash — Terminal"
    code={`daniel@macbook $ git fetch
 
daniel@macbook $ git rebase origin/master
 
Current branch add-increment-by-amount-util-function is up to date.
 
daniel@macbook $ git reset origin/master
 
Unstaged changes after reset:
 M	src/__tests__/utils.tests.js
 M	src/utils.js
 
daniel@macbook $ git status
 
On branch add-increment-by-amount-util-function
Your branch is behind 'origin/add-increment-by-amount-util-function' by 3 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
 
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
 
-	modified:   src/__tests__/utils.tests.js
-	modified:   src/utils.js
 
no changes added to commit (use "git add" and/or "git commit -a")
 
daniel@macbook $ git diff
 
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

export default ResetAndPatch;
