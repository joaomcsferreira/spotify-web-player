"use client"

import React from "react"

import Image from "next/image"

import { usePathname } from "next/navigation"

import backIcon from "../../../public/svg/less-than.svg"
import nextIcon from "../../../public/svg/greater-than.svg"
import searchIcon from "../../../public/svg/search.svg"

const styles = {
  container: "h-16 p-4 flex justify-between items-center",
  nav: "flex gap-2 items-center",
  navItem: "p-2 bg-black/60 rounded-full cursor-pointer",
  search: "p-3 h-12 min-w-[25rem] flex items-center gap-3 bg-nero rounded-full",
  searchIcon: "w-4 brightness-50",
  searchInput:
    "bg-transparent border-none pt-1 font-light text-sm outline-none",
  profile: "p-1 bg-black/70 rounded-full cursor-pointer",
  avatar: "w-6 h-6 bg-indigo-600 rounded-full",
}

const Header = () => {
  const pathname = usePathname()

  const [input, setInput] = React.useState("")

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.navItem}>
          <Image src={backIcon} alt={`${backIcon} icon`} />
        </div>

        <div className={styles.navItem}>
          <Image src={nextIcon} alt={`${nextIcon} icon`} />
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

      <div className={styles.profile}>
        <div className={styles.avatar}></div>
      </div>
    </div>
  )
}

export default Header
