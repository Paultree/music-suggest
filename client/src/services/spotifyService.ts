import { CLIENT_ID, CLIENT_SECRET } from "../client";
import { Parameter, Spotify, Song } from "./interface";
import { getSongName } from "./musicBrainzService";
import { getRandomQuery } from "./service";
import { getRandomNumberWithLimit } from "./service";

const authParameters: Parameter = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
};
const getToken = async (): Promise<string> => {
  const result = await fetch(
    "https://accounts.spotify.com/api/token",
    authParameters as any
  );
  let data: any = await result.json();

  return data.access_token;
};
const getRandomSong = async (genre: string): Promise<Spotify> => {
  const accessToken = await getToken();
  // get request authToken
  const parameters: Parameter = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  // query = random letter from a to z
  const query: string = getRandomQuery();
  //gets a random song from an array list of 100
  const songNameNumber = getRandomNumberWithLimit(100);
  //gets a random song name number
  const songName: string = await getSongName(query, songNameNumber);
  //gets a random page number
  const randomOffset: number = getRandomNumberWithLimit(200);
  //fetches track data based on offset and song name
  const link: any =
    `https://api.spotify.com/v1/search?q=${songName}%20` +
    (genre != "reset" ? `genre:${genre}` : genre == "reset" ? "" : "") +
    `&type=track&offset=${randomOffset}&limit=50`;
  const result: any = await fetch(link, parameters as any).catch((error) => {
    //hides error logs
    const mute = error;
  });

  if (!result) {
    throw new Error("Could not retrieve data. Trying again...");
  }

  const data: any = await result.json();
  const dataIndex: number = getRandomNumberWithLimit(49.9);
  const songData: Spotify = data.tracks.items[dataIndex];
  //if songdata is undefined or doesn't exist, does the function again - recursion?
  return songData ? songData : getRandomSong(genre);
};

const artistNames = (artists: any) => {
  let list = [];
  for (const artist of artists) {
    list.push(artist.name);
  }
  return list.join(" & ");
};

const transformSpotifyData = (spotifyData: Spotify): Song[] => {
  const track: Spotify[] = [spotifyData];
  return track.map((song: Spotify) => {
    return {
      id: song?.id,
      trackName: song?.name,
      preview: song?.preview_url,
      duration: song?.duration_ms,
      artists: artistNames(song?.artists),
      link: song?.external_urls?.spotify,
      albumName: song?.album?.name,
      albumLink: song?.album?.external_urls?.spotify,
      releaseDate: song?.album?.release_date,
      previewImg: song?.album?.images[1]?.url,
    };
  });
};

export const getSongData = async (genre: string): Promise<Song> => {
  const spotifyData: Spotify = await getRandomSong(genre);
  const songData: Song[] = transformSpotifyData(spotifyData);
  const song = songData[0];
  return song;
};
