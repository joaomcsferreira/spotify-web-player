import Header from "@/components/Header"
import Title from "@/components/Title"
import styles from "./index.css"

const myPlaylists = [
  {
    name: "Playlist 1",
    description: "description by playlist 1",
    image: "#8642f4",
  },
  {
    name: "Playlist 2",
    description: "description by playlist 2",
    image: "#1574f3",
  },
  {
    name: "Playlist 3",
    description: "description by playlist 3",
    image: "#0b95e9",
  },
  {
    name: "Playlist 4",
    description: "description by playlist 4",
    image: "#0b9ed2",
  },
  {
    name: "Playlist 5",
    description: "description by playlist 5",
    image: "#13aebc",
  },
  {
    name: "Playlist 6",
    description: "description by playlist 6",
    image: "#00c9b7",
  },
]
const randomPlaylists = [
  "Random Playlist 1",
  "Random Playlist 2",
  "Random Playlist 3",
  "Random Playlist 4",
  "Random Playlist 5",
  "Random Playlist 6",
  "Random Playlist 7",
  "Random Playlist 8",
]

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <div className={styles.section}>
          <Title size="medium">Good morning</Title>
          <div className={styles.userPlaylists}>
            {myPlaylists.map((playlist) => (
              <div key={playlist.name} className={styles.playlist}>
                <div
                  className={styles.playlistCover}
                  style={{ backgroundColor: playlist.image }}
                ></div>

                <h2 className={styles.playlistName}>{playlist.name}</h2>
              </div>
            ))}
          </div>
        </div>

        {randomPlaylists.map((randomPlaylist) => (
          <div key={randomPlaylist} className={styles.section}>
            <Title>{randomPlaylist}</Title>

            <div className={styles.recommendedPlaylist}>
              {myPlaylists.map((playlist) => (
                <div
                  key={playlist.name}
                  className={styles.recommendedPlaylistItem}
                >
                  <div
                    className={styles.recommendedPlaylistItemCover}
                    style={{ backgroundColor: playlist.image }}
                  ></div>
                  <h5 className={styles.recommendedPlaylistItemName}>
                    {playlist.name}
                  </h5>
                  <p className={styles.recommendedPlaylistItemDescription}>
                    {playlist.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
