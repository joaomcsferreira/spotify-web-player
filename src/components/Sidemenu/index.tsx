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

const libraryItems = [
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

const Sidemenu = () => {
  const [active, setActive] = React.useState("home")
  const [expand, setExpand] = React.useState(true)

  const handleClick = () => {
    setExpand((expand) => !expand)
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
                  } ${!expand && "!hidden"}`}
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
              <p className={`${!expand && "!hidden"} hidden sm:block`}>
                Your Library
              </p>
            </div>

            <div className={`${styles.libraryAction} ${!expand && "!hidden"}`}>
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
          </div>

          <div className={`${styles.libraryTypes} ${!expand && "!hidden"}`}>
            <p className={styles.libraryTypesItem}>Playlists</p>
            <p className={styles.libraryTypesItem}>Artists</p>
            <p className={styles.libraryTypesItem}>Albums</p>
            <p className={styles.libraryTypesItem}>Podcasts & shows</p>
          </div>

          <div className={`${styles.libraryFilter} ${!expand && "!hidden"}`}>
            <div className={`${styles.libraryActionItem} w-[2.15rem]`}>
              <Image src={searchIcon} alt="search in your library icon" />
            </div>
            <div className={styles.libraryFilterSortBy}>
              <p>Recents</p>
              <Image src={arrowDownIcon} alt="show filters icon" />
            </div>
          </div>

          <div className={`${styles.libraryItems} ${!expand && "!p-0"}`}>
            {libraryItems.map((item) => (
              <div
                key={item.name}
                className={`${styles.libraryItem} ${!expand && "!w-fit"}`}
              >
                <div
                  className={styles.libraryItemCover}
                  style={{ backgroundColor: item.image }}
                ></div>
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
        </div>
      </div>
    </div>
  )
}

export default Sidemenu