import MainContent from "@/components/MainContent"
import Title from "@/components/Title"

import styles from "./index.css"

const searchTypes = [
  { name: "search type 1", color: "#FF5733" },
  { name: "search type 2", color: "#6A1B9A" },
  { name: "search type 3", color: "#00BCD4" },
  { name: "search type 4", color: "#8BC34A" },
  { name: "search type 5", color: "#FFC107" },
  { name: "search type 6", color: "#795548" },
  { name: "search type 7", color: "#F44336" },
  { name: "search type 8", color: "#3F51B5" },
  { name: "search type 9", color: "#E91E63" },
  { name: "search type 10", color: "#9C27B0" },
  { name: "search type 11", color: "#009688" },
  { name: "search type 12", color: "#4CAF50" },
  { name: "search type 13", color: "#FF9800" },
  { name: "search type 14", color: "#607D8B" },
  { name: "search type 15", color: "#2196F3" },
]

const page = () => {
  return (
    <MainContent>
      <div className={styles.container}>
        <Title>Browse all</Title>

        <div className={styles.searchTypes}>
          {searchTypes.map((item) => (
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
