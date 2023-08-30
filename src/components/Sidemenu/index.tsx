"use client"

import React from "react"

import Image from "next/image"
import Link from "next/link"

import homeIcon from "../../../public/svg/house.svg"
import homeFullIcon from "../../../public/svg/house-full.svg"
import searchIcon from "../../../public/svg/search.svg"
import searchFullIcon from "../../../public/svg/search-full.svg"
import libraryIcon from "../../../public/svg/library.svg"
import libraryFullIcon from "../../../public/svg/library-full.svg"
import plusIcon from "../../../public/svg/plus.svg"
import arrowRightIcon from "../../../public/svg/arrow-right.svg"
import arrowDownIcon from "../../../public/svg/inverted-triangle.svg"
import pin from "../../../public/svg/pin.svg"

import { useUserContext } from "@/context/UserProvider/context"
import { YOUR_PLAYLISTS, YOUR_PLAYLISTS_PINNED } from "@/context/data"

import Button from "../Button"

import styles from "./index.css"

const items = [
  { name: "home", link: "/", icon: homeIcon, iconFull: homeFullIcon },
  {
    name: "search",
    link: "/search",
    icon: searchIcon,
    iconFull: searchFullIcon,
  },
]

const yourPlaylists = YOUR_PLAYLISTS
const yourPlaylistsPinned = YOUR_PLAYLISTS_PINNED

const Sidemenu = () => {
  const [active, setActive] = React.useState("home")
  const [expand, setExpand] = React.useState(true)

  const { isLogged } = useUserContext()

  const handleClick = () => {
    if (isLogged) setExpand((expand) => !expand)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {items.map((item) => (
            <Link href={item.link} key={item.name}>
              <div
                className={styles.navItem}
                onClick={() => setActive(item.name)}
              >
                <Image
                  className={`${styles.navItemIcon} ${
                    active === item.name ? "brightness-100" : "brightness-50"
                  }`}
                  src={active === item.name ? item.iconFull : item.icon}
                  alt={`${item.name} icon`}
                />
                <p
                  className={`${styles.navItemName} ${
                    active === item.name ? "text-white" : "text-silver"
                  } ${!expand && "!hidden"} ${!isLogged && "!block"}`}
                >
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.library}>
          <div className={styles.libraryHeader}>
            <div className={styles.libraryTitle} onClick={handleClick}>
              <Image
                src={expand ? libraryIcon : libraryFullIcon}
                alt={`library icon`}
              />
              <p
                className={`${!expand && "!hidden"} ${
                  isLogged && "hidden sm:block"
                }`}
              >
                Your Library
              </p>
            </div>

            {isLogged && (
              <div
                className={`${styles.libraryAction} ${!expand && "!hidden"}`}
              >
                <div className={styles.libraryActionItem}>
                  <Image
                    className={styles.libraryActionItemIcon}
                    src={plusIcon}
                    alt="create playlist or folder icon"
                  />
                </div>

                <div className={styles.libraryActionItem}>
                  <Image
                    className={styles.libraryActionItemIcon}
                    src={arrowRightIcon}
                    alt="show more icon"
                  />
                </div>
              </div>
            )}
          </div>

          {isLogged ? (
            <>
              <div className={`${styles.libraryTypes} ${!expand && "!hidden"}`}>
                <p className={styles.libraryTypesItem}>Playlists</p>
                <p className={styles.libraryTypesItem}>Artists</p>
                <p className={styles.libraryTypesItem}>Albums</p>
                <p className={styles.libraryTypesItem}>Podcasts & shows</p>
              </div>

              <div
                className={`${styles.libraryFilter} ${!expand && "!hidden"}`}
              >
                <div className={`${styles.libraryActionItem} w-[2.15rem]`}>
                  <Image src={searchIcon} alt="search in your library icon" />
                </div>
                <div className={styles.libraryFilterSortBy}>
                  <p>Recents</p>
                  <Image src={arrowDownIcon} alt="show filters icon" />
                </div>
              </div>

              <div className={`${styles.libraryItems} ${!expand && "!p-0"}`}>
                {yourPlaylistsPinned.map((item) => (
                  <div
                    key={item.name}
                    className={`${styles.libraryItem} ${!expand && "!w-fit"}`}
                  >
                    <Image
                      src={`/images/${item.cover}`}
                      alt={`playlist ${item.name} cover`}
                      width={48}
                      height={48}
                      className={styles.libraryItemCover}
                    />
                    <div
                      className={`${styles.libraryItemInfo} ${
                        !expand && "!hidden"
                      }`}
                    >
                      <h4 className={styles.libraryItemTitle}>{item.name}</h4>
                      <p
                        className={`${styles.libraryItemDescription} flex gap-2 items-center`}
                      >
                        <Image src={pin} alt="pin icon" className="w-3" />
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}

                {yourPlaylists.map((item) => (
                  <div
                    key={item.name}
                    className={`${styles.libraryItem} ${!expand && "!w-fit"}`}
                  >
                    <Image
                      src={`/images/${item.cover}`}
                      alt={`playlist ${item.name} cover`}
                      width={48}
                      height={48}
                      className={styles.libraryItemCover}
                    />
                    <div
                      className={`${styles.libraryItemInfo} ${
                        !expand && "!hidden"
                      }`}
                    >
                      <h4 className={styles.libraryItemTitle}>{item.name}</h4>
                      <p className={styles.libraryItemDescription}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.librarySuggestion}>
              <div className={styles.librarySuggestionItem}>
                <h5 className={styles.librarySuggestionTitle}>
                  Create your first playlist
                </h5>
                <p className={styles.librarySuggestionDescription}>
                  it&apos;s easy, we&apos;ll help you
                </p>
                <Button size="small">Create playlist</Button>
              </div>
              <div className={styles.librarySuggestionItem}>
                <h5 className={styles.librarySuggestionTitle}>
                  Let&apos;s find some podcasts to follow
                </h5>
                <p className={styles.librarySuggestionDescription}>
                  we&apos;ll keep you updated on new episodes
                </p>
                <Button size="small">Browse podcasts</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidemenu
