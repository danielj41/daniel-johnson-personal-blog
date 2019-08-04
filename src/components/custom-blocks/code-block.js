import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = ({ code, language = "jsx", preStyle = {}, preRef }) => (
  // Set `theme` to undefined so that it uses the globally-defined theme
  // in `prism-theme.css`. Since `gatsby-remark-prismjs` uses the global
  // theme as well, both this <CodeBlock> component and the markdown
  // ``` ... ``` syntax will use the same theme. It's convenient to be able
  // to use either the component and the markdown syntax, depending on where
  // I'm showing a code block.
  <Highlight
    {...defaultProps}
    theme={undefined}
    code={code}
    language={language}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={{ ...style, ...preStyle }} ref={preRef}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

export default CodeBlock;
