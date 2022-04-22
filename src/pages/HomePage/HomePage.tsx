import { FC, useEffect, useState } from "react"

import styles from "./HomePage.module.scss"

import Search from "../../components/Search/Search"
import Card from "../../components/Card/Card"
import Pagination from "../../components/Pagination/Pagination"

interface IArticle {
  id: number
  userId: number
  title: string
  body: string
}

const HomePage: FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([])

  const [error, setError] = useState<TypeError | null>(null)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const [searchValue, setSearchValue] = useState<string>("")

  //pagination states
  const [count, setCount] = useState<number>(0)
  const [limit] = useState<number>(5)
  const [page, setPage] = useState<number>(1)

  //taking data from server
  //https://ru.reactjs.org/docs/faq-ajax.html
  //there is no dependencies(dependecies array is empty), but this useEffect still makes two requests to the server
  //Can't find the reason
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true)
          setArticles(res)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
    setCount(articles.length)
  }, [])

  function handleSearchTextChange(searchValue: string): void {
    setSearchValue(searchValue)
  }

  const [filteredArticles, setfilteredArticles] = useState<IArticle[]>([])

  //filter data by text in body of article
  useEffect(() => {
    setTimeout(() => {
      setfilteredArticles(
        searchValue
          ? articles.filter((article) => article.body.includes(searchValue))
          : articles
      )
    }, 1000)
  }, [searchValue, JSON.stringify(articles)])

  //splitting articles by pages
  const [paginatedArticles, setPaginatedArticles] = useState<IArticle[]>([])
  useEffect(() => {
    setPaginatedArticles(
      filteredArticles.slice((page - 1) * limit, (page - 1) * limit + limit)
    )
    setCount(filteredArticles.length)
    console.log(count)
  }, [count, page, JSON.stringify(filteredArticles)])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  }
  return (
    <div className={`wrapper ${styles.homepage}`}>
      <div className={`container padding ${styles.homepage_container}`}>
        <Search
          searchText={searchValue}
          onSearchTextChange={handleSearchTextChange}
        />
        <div className={`cardset ${styles.homepage_cardset}`}>
          {paginatedArticles.map((item) => {
            return <Card key={item.id} content={item} />
          })}
        </div>
        <Pagination
          page={page}
          setCurrentPage={setPage}
          limit={limit}
          total={count}
        />
      </div>
    </div>
  )
}

export default HomePage
