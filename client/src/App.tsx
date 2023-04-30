import Button from "./components/Button/Button";
import { getSongData } from "./services/spotifyService";
import styles from "./App.module.scss";
import { useQuery } from "react-query";
import SongCard from "./components/SongCard/SongCard";
import { Song } from "./services/interface";

function App() {
  //useState to update what query function is used.
  const { data, refetch, isRefetching, isLoading, error, isError } = useQuery<
    Song,
    Error
  >("song", getSongData, {
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: false,
  });

  return (
    <div className={styles.App}>
      <header className={styles.App_Header}>
        <h1 className={styles.App_Header_Title}>rTunes</h1>
        <h3 className={styles.App_Header_SubTitle}>
          Click on the button below to get a random song from the Spotify API!
        </h3>
      </header>
      <section className={styles.App_Body}>
        <SongCard
          data={data}
          isRefetching={isRefetching}
          isLoading={isLoading}
          error={error}
          isError={isError}
        />
      </section>
      <section>
        <Button handleClick={refetch} string={"Go!"} />
      </section>
    </div>
  );
}

export default App;
