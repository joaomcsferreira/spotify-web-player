export interface UserProviderProps {
  children: React.ReactNode
}

export interface UserContextValue {
  isLogged: boolean
  user: null | string
  login: (username: string) => void
}
