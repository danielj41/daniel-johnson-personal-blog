import React, { useState, useEffect, useRef } from "react";

import CodeBlock from "./code-block";

// const typingCode = createTypingCode`hello${0}test${1000}other{30}`
// <TypingCodeBlock typingCode={typingCode} />
//
// Will instantly print `hello`, print `test` over 1000ms,
// then print `other` over 30ms.
export const createTypingCode = (strings, ...timings) => {
  const getTypingCode = time => {
    let typedString = "";
    let typedTime = 0;
    let timeUntilNextPoint = null;

    for (let [index, timeDelta] of timings.entries()) {
      const string = strings[index];
      if (typedTime + timeDelta < time) {
        typedString += string;
      } else {
        let amountComplete = (time - typedTime) / timeDelta;
        typedString += string.substr(
          0,
          Math.ceil(string.length * amountComplete)
        );
        timeUntilNextPoint = 10; // TODO

        break;
      }

      typedTime += timeDelta;
    }

    return { typedString, timeUntilNextPoint };
  };

  return getTypingCode;
};

const useTypingCode = getTypingCode => {
  const [time, setTime] = useState(0);

  const { typedString, timeUntilNextPoint } = getTypingCode(time);

  useEffect(() => {
    if (timeUntilNextPoint !== null) {
      const timeout = setTimeout(() => {
        setTime(time + timeUntilNextPoint);
      }, timeUntilNextPoint);

      return () => clearTimeout(timeout);
    }
  }, [time, timeUntilNextPoint]);

  return typedString;
};

export const TypingCodeBlock = ({ typingCode, language }) => {
  const code = useTypingCode(typingCode);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  });

  return (
    <CodeBlock
      code={code}
      language={language}
      preStyle={{
        height: 480,
      }}
      preRef={ref}
    />
  );
};
