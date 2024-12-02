const start = 'What number is missing in the progression?';

const generateProgression = () => {
  const begin = Math.floor(Math.random() * 10);
  const step = Math.floor(Math.random() * 5) + 1; // Шаг от 1 до 5
  const length = Math.floor(Math.random() * 6) + 5; // Длина прогрессии от 5 до 10
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(begin + i * step);
  }

  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    answer: hiddenValue,
  };
};

const gameProgression = [start, generateProgression];

export default gameProgression;
