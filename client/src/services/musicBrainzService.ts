export const getSongName = async (
  string: string,
  number: number
): Promise<any> => {
  const page: number = Math.floor(Math.random() * 100) + 1;
  const result = await fetch(
    `http://musicbrainz.org/ws/2/annotation/?query=${string}&fmt=json&limit=100&offset=${page}`
  );

  const data = await result.json();

  const songName = data.annotations[number].name;

  return songName.replace(" ", "+");
};
