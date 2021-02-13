import React from "react";

import TerminalCodeBlock from "../../components/custom-blocks/terminal-code-block";

const EditRebase = () => (
  <TerminalCodeBlock
    language="shell"
    prompt="maisie@macbook $"
    title="📁 ~/example — vim — Terminal"
    code={`pick 165cfa2 add incrementByAmount
pick 95c2b9e add decrementByAmount
edit█356409a move decrement from utils.js to decrement.ts
pick b418d55 add a dependency

# Rebase 18e678f..b418d55 onto 18e678f (4 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
-- INSERT --
`}
  />
);

export default EditRebase;
