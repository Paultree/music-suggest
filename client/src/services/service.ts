export const getRandomQuery = (): string => {
  const characters = "abcdefghijklmnopqrstuvwxyz";

  const randomCharacter = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
  const query = `%25${randomCharacter}%25`;

  return query;
};

export const getRandomNumberWithLimit = (number: number): number => {
  return Math.floor(Math.random() * number);
};
