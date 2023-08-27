"use client"

import React from "react"

import { UserContextValue } from "./types"

export const UserContext = React.createContext({} as UserContextValue)

export const useUserContext = () => React.useContext(UserContext)
