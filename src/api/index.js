const RANDOM_WORD_API = "https://randword.vercel.app/";
const MIN_WORD_LENGTH = 6;
const MAX_WORD_LENGTH = 8;
const NUMBER_OF_WORDS = 10;

export const getRandomWords = async () => {
  const data = await fetch(
    `${RANDOM_WORD_API}words?num=${NUMBER_OF_WORDS}&min=${MIN_WORD_LENGTH}&max=${MAX_WORD_LENGTH}`
  ).then((res) => res.json());

  return data;
};
