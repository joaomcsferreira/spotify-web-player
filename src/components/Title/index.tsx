import styles from "./index.css"

interface TitleProps {
  children: React.ReactNode
  size?: "small" | "medium" | "large"
}

const Title = ({ children, size }: TitleProps) => {
  return (
    <h1
      className={`${styles.title} ${
        size === "medium"
          ? styles.sizeMedium
          : size === "large"
          ? styles.sizeLarge
          : ""
      }`}
    >
      {children}
    </h1>
  )
}

export default Title
