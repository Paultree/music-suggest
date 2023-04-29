import { CLIENT_ID, CLIENT_SECRET } from "../client";
import { getSongName } from "./musicBrainzService";
import { getRandomQuery } from "./service";
import { getRandomNumberWithLimit } from "./service";

const authParameters = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
};

export const getToken = async () => {
  const result = await fetch(
    "https://accounts.spotify.com/api/token",
    authParameters
  );
  let data = await result.json();

  return data.access_token;
};

export const getRandomSong = async (): Promise<any> => {
  const accessToken = await getToken();
  // get request authToken
  const parameters = {
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
  const songName = await getSongName(query, songNameNumber);
  //gets a random page number
  const randomOffset: number = getRandomNumberWithLimit(1000);
  //fetches track data based on offset and song name
  const result: any = await fetch(
    `https://api.spotify.com/v1/search?query=${songName}&type=track&offset=${randomOffset}&limit=50`,
    parameters
  );

  const data = await result.json();
  const dataIndex = getRandomNumberWithLimit(49.9);
  const songData = data.tracks.items[dataIndex];
  console.log(songData);
  //if songdata is undefined or doesn't exist, does the function again - recursion?
  return songData ? songData : getRandomSong();
};
