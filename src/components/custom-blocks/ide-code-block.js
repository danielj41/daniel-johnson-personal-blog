import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

import CodeBlockHeader from "./code-block-header";

const TerminalCodeBlock = ({ code, language = "jsx", title = "VSCode" }) => (
  // Set `theme` to undefined so that it uses the globally-defined theme
  // in `prism-theme.css`. Since `gatsby-remark-prismjs` uses the global
  // theme as well, both this <CodeBlock> component and the markdown
  // ``` ... ``` syntax will use the same theme. It's convenient to be able
  // to use either the component and the markdown syntax, depending on where
  // I'm showing a code block.
  <>
    <CodeBlockHeader title={title} />
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span className="line-number">
                {"   ".substring(`${i + 1}`.length) + (i + 1) + "    "}
              </span>
              <>
                {line.map((token, key) => {
                  const props = getTokenProps({ token, key });

                  return <span {...props} />;
                })}
              </>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </>
);

export default TerminalCodeBlock;
