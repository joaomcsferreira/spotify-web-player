import styles from "./index.css"

interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <button className={styles.container}>{children}</button>
}

export default Button
