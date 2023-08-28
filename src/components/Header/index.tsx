"use client"

import React from "react"

import Image from "next/image"

import { usePathname } from "next/navigation"

import backIcon from "../../../public/svg/less-than.svg"
import nextIcon from "../../../public/svg/greater-than.svg"
import searchIcon from "../../../public/svg/search.svg"
import styles from "./index.css"
import { useUserContext } from "@/context/UserProvider/context"
import Button from "../Button"

const Header = () => {
  const pathname = usePathname()

  const { isLogged } = useUserContext()

  const [input, setInput] = React.useState("")

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navItem}>
          <Image
            src={backIcon}
            alt={`${backIcon} icon`}
            className={styles.navItemIcon}
          />
        </div>

        <div className={styles.navItem}>
          <Image
            src={nextIcon}
            alt={`${nextIcon} icon`}
            className={styles.navItemIcon}
          />
        </div>

        {pathname === "/search" && (
          <div className={styles.search}>
            <Image
              src={searchIcon}
              alt="search music icon"
              className={styles.searchIcon}
            />
            <input
              type="text"
              value={input}
              placeholder="What fo you want to listen to?"
              className={styles.searchInput}
              onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                setInput(target.value)
              }
            />
          </div>
        )}
      </div>

      {isLogged ? (
        <div className={styles.profile}>
          <div className={styles.avatar}></div>
        </div>
      ) : (
        <Button>Log in</Button>
      )}
    </div>
  )
}

export default Header
