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

export const msToTime = (duration: number): string => {
  const seconds: string = String(Math.floor(duration / 1000) % 60);
  const minutes: string = String(Math.floor(duration / (1000 * 60)) % 60);
  const hours: string = String(Math.floor(duration / (1000 * 60 * 60)) % 24);

  const newHours = parseInt(hours) < 10 ? "0" + hours : hours;
  const newMinutes = parseInt(minutes) < 10 ? "0" + minutes : minutes;
  const newSeconds = parseInt(seconds) < 10 ? "0" + seconds : seconds;

  return newHours + ":" + newMinutes + ":" + newSeconds;
};
