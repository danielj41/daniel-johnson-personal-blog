import React from "react";

import {
  TypingCodeBlock,
  createTypingCode,
} from "../../components/typing-code-block";

const typingGitAddPatch = createTypingCode`
daniel@macbook $ ${0}g${2000}it add -p${200}
${1000}diff --git a/src/__tests__/utils.tests.js b/src/__tests__/utils.tests.js
index 0d7326c..a3f5326 100644
--- a/src/__tests__/utils.tests.js
+++ b/src/__tests__/utils.tests.js
@@ -19,6 +19,16 @@ describe("utils", () => {
     });
   });
 
+  describe("incrementByAmount", () => {
+    it("should increment by 1000", () => {
+      const number = -2;
+
+      const incrementedNumber = incrementByAmount(number, 1000);
+
+      expect(incrementedNumber).toBe(9998);
+    });
+  });
+
   describe("decrement", () => {
     it("should decrement a positive number", () => {
       const number = 2;
Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]? ${0}y${2000}es${200}
${1000}@@ -36,4 +46,14 @@ describe("utils", () => {
       expect(decrementedNumber).toBe(-3);
     });
   });
+
+  describe("decrementByAmount", () => {
+    it("should decrement by 1000", () => {
+      const number = -2;
+
+      const decrementedNumber = decrementByAmount(number, 1000);
+
+      expect(decrementedNumber).toBe(-1002);
+    });
+  });
 });
Stage this hunk [y,n,q,a,d,K,g,/,e,?]? ${0}n${2000}o${200}
${1000}
diff --git a/src/utils.js b/src/utils.js
index 91867c3..99cbc75 100644
--- a/src/utils.js
+++ b/src/utils.js
@@ -2,10 +2,18 @@ function increment(x) {
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
 module.exports = {
   increment,
   decrement
Stage this hunk [y,n,q,a,d,s,e,?]? ${0}s${2000}plit${200}
${1000}Split into 2 hunks.
@@ -2,7 +2,11 @@
   return x + 1;
 }
 
+function incrementByAmount(x, amount) {
+  return x + amount;
+}
+
 function decrement(x) {
   return x - 1;
 }
 
Stage this hunk [y,n,q,a,d,j,J,g,/,e,?]? ${0}y${2000}es${200}
${1000}@@ -5,7 +9,11 @@
 function decrement(x) {
   return x - 1;
 }
 
+function decrementByAmount(x, amount) {
+  return x - amount;
+}
+
 module.exports = {
   increment,
   decrement
Stage this hunk [y,n,q,a,d,K,g,/,e,?]? ${0}n${2000}o${200}
${1000}
daniel@macbook $ ${0}g${2000}it status${200}
${1000}On branch add-increment-by-amount-util-function
Your branch is behind 'origin/add-increment-by-amount-util-function' by 3 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
 
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)
 
+	modified:   src/__tests__/utils.tests.js
+	modified:   src/utils.js
 
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)
 
-	modified:   src/__tests__/utils.tests.js
-	modified:   src/utils.js
 
daniel@macbook $${0} ${2000}`;

export default () => (
  <TypingCodeBlock
    placeholder="daniel@macbook $ git add -p"
    typingCode={typingGitAddPatch}
    language="diff"
  ></TypingCodeBlock>
);
