import "./globals.css"
import type { Metadata } from "next"

import localFont from "next/font/local"
import Player from "@/components/Player"
import Sidemenu from "@/components/Sidemenu"

import { UserProvider } from "@/context/UserProvider"

const circular = localFont({
  src: [
    { path: "../../public/fonts/circular-light.otf", weight: "300" },
    { path: "../../public/fonts/circular-book.otf", weight: "400" },
    { path: "../../public/fonts/circular-medium.otf", weight: "500" },
    { path: "../../public/fonts/circular-bold.otf", weight: "700" },
    { path: "../../public/fonts/circular-black.otf", weight: "900" },
  ],
  variable: "--font-circular",
})

export const metadata: Metadata = {
  title: "Spotify: Web Player",
  description: "Music for everyone.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${circular.variable} font-sans`}>
      <body className="grid font-light h-screen grid-cols-3070 grid-rows-9010 relative">
        <UserProvider>
          <Sidemenu />
          {children}
          <Player />
        </UserProvider>
      </body>
    </html>
  )
}
