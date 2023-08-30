import styles from "./index.css"

interface ButtonProps {
  children: React.ReactNode
  size?: "small" | "large"
  onClick?: () => void
}

const Button = ({ children, size, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.container} ${
        size === "small" ? styles.small : styles.large
      }`}
    >
      {children}
    </button>
  )
}

export default Button
