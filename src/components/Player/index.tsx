import Image from "next/image"

import heartIcon from "../../../public/svg/heart.svg"
import miniPlayerIcon from "../../../public/svg/mini-player.svg"

import shuffleIcon from "../../../public/svg/shuffle.svg"
import backwardIcon from "../../../public/svg/backward.svg"
import playerIcon from "../../../public/svg/player.svg"
import forwardIcon from "../../../public/svg/forward.svg"
import repeatIcon from "../../../public/svg/repeat.svg"
import playerViewIcon from "../../../public/svg/player-view.svg"
import microphoneIcon from "../../../public/svg/microphone.svg"
import queueIcon from "../../../public/svg/queue.svg"
import deviceIcon from "../../../public/svg/device.svg"
import soundIcon from "../../../public/svg/sound.svg"
import expandIcon from "../../../public/svg/expand.svg"

import styles from "./index.css"

const Player = () => {
  return (
    <div className={styles.container}>
      <div className={styles.currentMusic}>
        <div className={styles.currentMusicImage}></div>

        <div className={styles.currentMusicInfo}>
          <h5 className={styles.currentMusicInfoName}>current music name</h5>
          <p className={styles.currentMusicInfoAlbum}>current music album</p>
        </div>

        <div className={styles.currentMusicActions}>
          <Image
            src={heartIcon}
            alt="save to your library"
            className={styles.currentMusicActionsItem}
          />
          <Image
            src={miniPlayerIcon}
            alt="picture in picture"
            className={styles.currentMusicActionsItem}
          />
        </div>
      </div>

      <div className={styles.player}>
        <div className={styles.playerControls}>
          <Image
            src={shuffleIcon}
            alt={"enable shuffle icon"}
            className={styles.playerControlsItem}
          />
          <Image
            src={backwardIcon}
            alt={"previous icon"}
            className={styles.playerControlsItem}
          />
          <div className={styles.playerControlsPlay}>
            <Image
              src={playerIcon}
              alt={"play icon"}
              className={`brightness-0`}
            />
          </div>
          <Image
            src={forwardIcon}
            alt={"next icon"}
            className={styles.playerControlsItem}
          />
          <Image
            src={repeatIcon}
            alt={"repeat icon"}
            className={styles.playerControlsItem}
          />
        </div>

        <div className={styles.playerProgress}>
          <p className={styles.playerProgressTime}>0:00</p>
          <div className={styles.playerProgressBar}></div>
          <p className={styles.playerProgressTime}>0:00</p>
        </div>
      </div>

      <div className={styles.multimedia}>
        <Image
          src={playerViewIcon}
          alt={"now playing view icon"}
          className={styles.multimediaItem}
        />
        <Image
          src={microphoneIcon}
          alt={"lyrics icon"}
          className={styles.multimediaItem}
        />
        <Image
          src={queueIcon}
          alt={"queue icon"}
          className={styles.multimediaItem}
        />
        <Image
          src={deviceIcon}
          alt={"devices icon"}
          className={styles.multimediaItem}
        />
        <Image
          src={soundIcon}
          alt={"sound icon"}
          className={styles.multimediaItem}
        />
        <Image
          src={expandIcon}
          alt={"full screen icon"}
          className={styles.multimediaItem}
        />
      </div>
    </div>
  )
}

export default Player
