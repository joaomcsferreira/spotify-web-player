"use client"

import Image from "next/image"

import Title from "@/components/Title"
import MainContent from "@/components/MainContent"

import { useUserContext } from "@/context/UserProvider/context"
import { ANOTHER_PLAYLISTS, YOUR_PLAYLISTS } from "@/context/data"

import styles from "./index.css"

const yourPlaylists = YOUR_PLAYLISTS.slice(0, 6)

const anotherPlaylists = ANOTHER_PLAYLISTS

export default function Home() {
  const { isLogged } = useUserContext()

  return (
    <MainContent
      background={
        isLogged
          ? "bg-[linear-gradient(180deg,_#25267a_5%,_#121212_100%)]"
          : "bg-ebony"
      }
      className="flex flex-col gap-10"
    >
      {isLogged ? (
        <>
          <div className={styles.section}>
            <Title size="medium">Good morning</Title>
            <div className={styles.userPlaylists}>
              {yourPlaylists.map((playlist) => (
                <div key={playlist.name} className={styles.playlist}>
                  <Image
                    src={`/images/${playlist.cover}`}
                    alt={`playlist ${playlist.name} cover`}
                    width={80}
                    height={80}
                    className={styles.playlistCover}
                  />

                  <h2 className={styles.playlistName}>{playlist.name}</h2>
                </div>
              ))}
            </div>
          </div>

          {anotherPlaylists.map((anotherPlaylist) => (
            <div key={anotherPlaylist.title} className={styles.section}>
              <Title>{anotherPlaylist.title}</Title>

              <div className={styles.recommendedPlaylist}>
                {anotherPlaylist.items.slice(0, 5).map((playlist) => (
                  <div
                    key={playlist.name}
                    className={styles.recommendedPlaylistItem}
                  >
                    <div className={styles.recommendedPlaylistItemCover}>
                      <Image
                        src={`/images/${playlist.cover}`}
                        alt={`playlist ${playlist.name} cover`}
                        className={styles.recommendedPlylistItemCoverImage}
                        fill
                      />
                    </div>
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
        </>
      ) : (
        <div className={styles.section}>
          <Title>Spotify playlists</Title>

          <div className={styles.recommendedPlaylist}>
            {/* {myPlaylists.map((playlist) => (
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
            ))} */}
          </div>
        </div>
      )}
    </MainContent>
  )
}
