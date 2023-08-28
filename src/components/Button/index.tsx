import styles from "./index.css"

interface ButtonProps {
  children: React.ReactNode
  size?: "small" | "large"
}

const Button = ({ children, size }: ButtonProps) => {
  return (
    <button
      className={`${styles.container} ${
        size === "small" ? styles.small : styles.large
      }`}
    >
      {children}
    </button>
  )
}

export default Button
