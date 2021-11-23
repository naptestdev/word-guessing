import { useEffect, useRef, useState } from "react";

import Keyboard from "./components/Keyboard";
import { getRandomWords } from "./api";

function App() {
  const [loading, setLoading] = useState(true);
  const [win, setWin] = useState(false);
  const [words, setWords] = useState([]);
  const [current, setCurrent] = useState(0);
  const [currentMissingWord, setCurrentMissingWord] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  const isCorrectRef = useRef(null);
  const loadingRef = useRef(true);
  const wordsLengthRef = useRef(10);

  useEffect(() => {
    setInterval(() => {
      setTimeLeft((prev) => {
        if (loadingRef.current) return prev;

        if (prev - 1 === 0) {
          if (isCorrectRef.current === null) {
            setIsCorrect(false);
            return 3;
          } else {
            setCurrent((prev) => {
              if (prev + 1 === wordsLengthRef.current - 1) {
                setWin(true);
                return prev;
              }
              return prev + 1;
            });
            setIsCorrect(null);
            return 10;
          }
        }

        return prev - 1;
      });
    }, 1000);

    (async () => {
      const data = await getRandomWords();

      setLoading(false);
      setWords(data);
    })();
  }, []);

  useEffect(() => {
    if (words.length === 0) return;

    const word = words[current];

    const missingCount = Math.ceil(Math.random() * 3);

    const missingIndexes = new Array(word.length)
      .fill("")
      .map((_, index) => index)
      .sort(() => Math.random() - 0.5)
      .slice(0, missingCount);

    setCurrentMissingWord(
      word
        .split("")
        .map((item, index) =>
          missingIndexes.indexOf(index) >= 0 ? null : item
        )
    );
  }, [current, words]);

  useEffect(() => {
    isCorrectRef.current = isCorrect;
    loadingRef.current = loading;
    wordsLengthRef.current = words.length;
  }, [isCorrect, loading, words.length]);

  const handleGuessCharacter = (char) => {
    const nullIndex = currentMissingWord.indexOf(null);

    const clone = [...currentMissingWord];

    clone[nullIndex] = char;

    setCurrentMissingWord(clone);

    if (clone.every((item) => item)) {
      if (clone.join("") === words[current]) {
        setIsCorrect(true);
        setScore((prev) => prev + 1);
      } else {
        setIsCorrect(false);
      }

      if (isCorrect === null) {
        setTimeLeft(3);
      }
    }
  };

  const reset = async () => {
    setLoading(true);
    setWin(false);
    setWords([]);
    setCurrent(0);
    setCurrentMissingWord([]);
    setIsCorrect(null);
    setScore(0);
    setTimeLeft(10);

    const data = await getRandomWords();

    setLoading(false);
    setWords(data);
  };

  if (loading)
    return (
      <div className="container">
        <h1>Loading random words...</h1>
      </div>
    );

  if (win)
    return (
      <div className="container">
        <div className="win-section">
          <h1>You win!</h1>
          <h1>
            Score: {score} / {words.length}
          </h1>
          <button onClick={reset}>Play again</button>
        </div>
      </div>
    );

  return (
    <div className="container">
      <main>
        <div
          className="progress"
          style={{
            width: timeLeft * (isCorrect === null ? 10 : 0) + "%",
          }}
        ></div>
        <div className="status">
          <p>Score: {score}</p>
          <p>
            {current + 1} / {words.length}
          </p>
          <p>
            {isCorrect === null ? "Time left" : "Next word"}: {timeLeft}
          </p>
        </div>

        <div className="display">
          <h1
            className={
              isCorrect === true
                ? "correct-answer"
                : isCorrect === false
                ? "wrong-answer"
                : ""
            }
          >
            {currentMissingWord.map((char) => (char === null ? "_" : char))}
          </h1>
          {isCorrect === false && (
            <h1 className="correct-answer">{words[current]}</h1>
          )}
        </div>

        <Keyboard handleGuessCharacter={handleGuessCharacter} />
      </main>
    </div>
  );
}

export default App;
