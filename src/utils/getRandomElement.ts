const getRandomElement = <T>(items: T[]): T | undefined => {
  return items[Math.floor(Math.random() * items.length)];
};

export default getRandomElement;
