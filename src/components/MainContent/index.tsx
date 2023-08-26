import Footer from "../Footer"
import Header from "../Header"

import styles from "./index.css"

interface MainContentProps {
  children: React.ReactNode
  background?: string
  className?: string
}

const MainContent = ({ children, background, className }: MainContentProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${
          background ? background : "bg-ebony"
        }`}
      >
        <Header />
        <div className={styles.content}>
          <div className={className}>
            {children}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
