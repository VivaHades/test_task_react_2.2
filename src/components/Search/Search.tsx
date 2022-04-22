import { FC } from "react"
import styles from "./Search.module.scss"

interface IProps {
  searchText: string
  onSearchTextChange: Function
}

const Search: FC<IProps> = (props) => {
  const { searchText, onSearchTextChange } = props

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    onSearchTextChange(e.target.value)
  }

  return (
    <form action="" className={styles.search_form}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="search..."
        className={styles.search_input}
      />
    </form>
  )
}

export default Search
