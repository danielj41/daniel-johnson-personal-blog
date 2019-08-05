import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import TerminalCodeBlock from "./terminal-code-block";

import styles from "./typing-code-block.module.css";

// Usage:
//
// const typingCode = createTypingCode`hello${0}test${100}other{30}`
// <TypingCodeBlock typingCode={typingCode} />
//
// Will instantly print `hello`, print `test` with 100ms between
// character printed, then print `other` over with 30ms between
// each character.

export const createTypingCode = (strings, ...timings) => {
  const getTypingCode = position => {
    let typedCode = "";
    let timeUntilNextPosition = null;
    let nextPosition = position + 1;

    for (let [index, timeDelta] of timings.entries()) {
      const string = strings[index];
      if (typedCode.length + string.length <= position) {
        typedCode += string;
      } else {
        nextPosition =
          timeDelta === 0 ? typedCode.length + string.length : position + 1;
        timeUntilNextPosition = timeDelta;
        typedCode += string.substring(0, position - typedCode.length);
        break;
      }
    }

    return { typedCode, timeUntilNextPosition, nextPosition };
  };

  return getTypingCode;
};

const useTypingCode = getTypingCode => {
  const [position, setPosition] = useState(0);
  const [started, setStarted] = useState(false);

  const { typedCode, timeUntilNextPosition, nextPosition } = getTypingCode(
    position
  );

  const completed = timeUntilNextPosition === null;

  useEffect(() => {
    if (started && !completed) {
      let timeout = setTimeout(() => {
        setPosition(nextPosition);
        timeout = null;
      }, timeUntilNextPosition);

      return () => clearTimeout(timeout);
    }
  }, [typedCode, timeUntilNextPosition, started, completed]);

  const startTypingCode = () => {
    setPosition(0);
    setStarted(true);
  };

  return { typedCode, startTypingCode, started, completed };
};

const useTypingIndicator = (started, completed) => {
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowTypingIndicator(!showTypingIndicator);
      timeout = null;
    }, 400);

    return () => clearTimeout(timeout);
  }, [showTypingIndicator]);

  return showTypingIndicator && started && !completed ? "█" : "";
};

const useScrollToBottom = dependencies => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, dependencies);

  return ref;
};

export const TypingCodeBlock = ({
  typingCode,
  language,
  placeholder = "",
  ...props
}) => {
  const { typedCode, startTypingCode, started, completed } = useTypingCode(
    typingCode
  );
  const typingIndicator = useTypingIndicator(started, completed);
  const ref = useScrollToBottom([typedCode]);

  const code = started ? `${typedCode}${typingIndicator}` : placeholder;

  return (
    <div className={styles.typingCodeBlock}>
      <div
        className={classNames({
          [styles.notStarted]: !started,
        })}
      >
        <TerminalCodeBlock
          code={code}
          language={language}
          preStyle={{
            height: 480,
          }}
          preRef={ref}
          {...props}
        />
      </div>
      {!started && (
        <button className={styles.playButton} onClick={startTypingCode}>
          <span className={styles.playText}>
            <span role="img" aria-label="">
              ▶️
            </span>{" "}
            Play
          </span>
        </button>
      )}
      {completed && (
        <button
          className={classNames(styles.playButton, styles.replayButton)}
          onClick={startTypingCode}
        >
          <span className={styles.playText}>
            <span role="img" aria-label="">
              🔁
            </span>{" "}
            Replay
          </span>
        </button>
      )}
    </div>
  );
};
