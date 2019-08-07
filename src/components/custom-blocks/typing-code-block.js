import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

import TerminalCodeBlock from "./terminal-code-block";

import styles from "./typing-code-block.module.css";

/**
 * <TypingCodeBlock /> renders a code sample inside of a "simulated Terminal."
 * It has a "play" button that will start "typing" the code, similar to a
 * screen recording/video of someone using their terminal.
 *
 * Usage example:
 *
 * const typingCode = createTypingCode`daniel@macbook $ ${0}git status${200}`
 *
 * <TypingCodeBlock typingCode={typingCode} />;
 *
 * Will instantly print the terminal prompt, `daniel@macbook $`, then type
 * `git status` with 200ms between each character printed.
 */

/**
 * Converts the template literal (with embedded ms timings) into a function.
 * Should be passed directly into <TerminalCodeBlock />, the rest is just
 * implementation details.
 *
 * The returned function, `getTypingCode`'s signature is
 * (position) => { typedCode, timeUntilNextPosition, nextPosition}
 *
 * It's meant to be called repeatedly, with an incrementing value for `position`
 * over time. `getTypingCode` is the "pure function" portion of the component.
 *
 * @param position: number: The character position in the string for everything
 *   that's been typed so far.
 * @returns
 *   typedCode: string: Substring of the code sample, from 0 to `position`
 *   timeUntilNextPosition: number: The length of time (ms) to wait before the
 *     next character gets "typed." (or null if string is fully-typed)
 *   nextPosition: number: The value to pass in for `position` when calling
 *     `getTypingCode` again, after `timeUntilNextPosition` ms have passed
 */
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
        // If `timeDelta` is 0, that means the output should be instant, so
        // set the `nextPosition` to the end of the current string. This
        // prevents small delays from repeatedly calling `setTimeout(..., 0)`
        // character-by-character. Otherwise, stick to outputting one character
        // at a time.
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

/**
 * React hook that implements the `setTimeout` (stateful) portion of the pure
 * `createTypingCode`. Calls `getTypingCode(position)` repeatedly over time,
 * with increasing values of `position`.
 *
 * @param getTypingCode The return value from createTypingCode`...`
 */
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
  }, [nextPosition, timeUntilNextPosition, started, completed]);

  const startTypingCode = () => {
    setPosition(0);
    setStarted(true);
  };

  return { typedCode, startTypingCode, started, completed };
};

/**
 * React hook that switches between returning  "█" and "" to simulate a
 * terminal typing position cursor blinking.
 */
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

/**
 * React hook that returns a `ref` that will be scrolled to the bottom whenever
 * `dependencies` change. Used to make the terminal always scrolled to the
 * bottom when simulating "typing."
 */
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
