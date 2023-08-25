import Sidemenu from "@/components/Sidemenu"
import "./globals.css"
import type { Metadata } from "next"

import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Player from "@/components/Player"

const inter = Inter({ subsets: ["latin"] })
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
      <body className="grid h-screen grid-cols-3070 grid-rows-9010 relative">
        <Sidemenu />
        {children}
        <Player />
      </body>
    </html>
  )
}
