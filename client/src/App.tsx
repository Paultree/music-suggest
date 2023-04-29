import Button from "./components/Button/Button";
import { getRandomQuery } from "./services/service";
import { getSongName } from "./services/musicBrainzService";
import { getRandomSong } from "./services/spotifyService";
function App() {
  return (
    <div>
      <header>
        <h1>Music Suggest</h1>
      </header>
      <section>
        <Button handleClick={getRandomSong} string={"Search a random song"} />
      </section>
    </div>
  );
}

export default App;
