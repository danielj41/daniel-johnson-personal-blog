import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";

import CodeBlockHeader from "./code-block-header";

const TerminalCodeBlock = ({
  code,
  language = "shell",
  prompt = "$",
  title = "Terminal",
  preStyle = {},
  preRef,
}) => (
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
            ...preStyle,
          }}
          ref={preRef}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                const props = getTokenProps({ token, key });
                const indexOfPrompt = props.children.indexOf(prompt);
                // HACK: Render the prompt lines with a different color, since
                // it's not highlighting that by default.
                if (indexOfPrompt !== -1) {
                  return (
                    <React.Fragment key={props.key}>
                      <span
                        {...props}
                        children={props.children.substring(
                          0,
                          indexOfPrompt + prompt.length
                        )}
                        className={classNames("token", "keyword")}
                        key={"1"}
                      />
                      <span
                        {...props}
                        children={props.children.substring(
                          indexOfPrompt + prompt.length
                        )}
                        className={classNames("token", "string")}
                        key={"2"}
                      />
                    </React.Fragment>
                  );
                }

                return <span {...props} />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </>
);

export default TerminalCodeBlock;
