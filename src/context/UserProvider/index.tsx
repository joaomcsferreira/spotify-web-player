"use client"

import React from "react"

import { UserContext } from "./context"
import { UserProviderProps } from "./types"
import { data } from "./data"

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isLogged, setIsLogged] = React.useState(data.isLogged)
  const [user, setUsername] = React.useState<null | string>(data.user)

  const login = (username: string) => {
    setIsLogged(true)
    setUsername(username)
  }

  const logout = () => {
    setIsLogged(false)
    setUsername(null)
  }

  return (
    <UserContext.Provider value={{ isLogged, user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
