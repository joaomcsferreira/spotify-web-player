import MainContent from "@/components/MainContent"
import Title from "@/components/Title"

import { SEARCH_ITEMS } from "@/context/data"

import styles from "./index.css"

const search_items = SEARCH_ITEMS

const page = () => {
  return (
    <MainContent>
      <div className={styles.container}>
        <Title>Browse all</Title>

        <div className={styles.searchTypes}>
          {search_items.map((item) => (
            <div
              key={item.name}
              style={{ backgroundColor: item.color }}
              className={styles.searchType}
            >
              <p className={styles.searchTypeName}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </MainContent>
  )
}

export default page
