import { SongCardProps } from "../../services/interface";
import { ThreeDots } from "react-loader-spinner";
import styles from "./SongCard.module.scss";
import AudioButton from "../AudioButton/AudioButton";
import { msToTime } from "../../services/service";

const SongCard = ({
  data,
  isRefetching,
  isLoading,
  error,
  isError,
}: SongCardProps) => {
  return isRefetching || isLoading ? (
    <div className={styles.SongCard_Loading}>
      <h2>Loading</h2>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </div>
  ) : isError ? (
    <div className={styles.SongCard_Error}>Error! {error.message}</div>
  ) : data ? (
    <div className={styles.SongCard_Data}>
      <div className={styles.SongCard_Data_Image}>
        <img src={data.previewImg} />
      </div>
      <div className={styles.SongCard_Data_Title}>
        <h3>Track</h3>
        <h3>Artists</h3>
        <h3>Album</h3>
        <h3>Duration</h3>
      </div>
      <div className={styles.SongCard_Data_Info}>
        <h2>{data.trackName}</h2>
        <h2>{data.artists}</h2>
        <h2>
          {data.albumName} ({data.releaseDate.slice(0, 4)})
        </h2>
        <h2>{msToTime(data.duration)}</h2>
        <div className={styles.SongCard_Data_Info_Preview}>
          <AudioButton preview={data.preview} />
          <a href={data.link} target="_blank">
            <button>Link</button>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default SongCard;
