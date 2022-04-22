import { FC } from "react"

import styles from "./Results.module.scss"

interface IUserData {
  name: string
  value: number
}

const data: IUserData[] = [
  { name: "Иванов О. В.", value: 10 },
  { name: "Иванов Олег Иваныч", value: 5 },
  { name: "Иванов Илья Петрович", value: 10 },
  { name: "Петров Петр Петрович", value: 15 },
  { name: "Сидоров Сергей Иваныч", value: 10 },
  { name: "Сидоров Иван Иваныч ", value: 10 },
]

interface IResult {
  [key: string]: number
}

const result: IResult = data.reduce(
  (acum: IResult, row) =>
    Object.assign(acum, {
      [row.name.split(" ")[0]]: (acum[row.name.split(" ")[0]] || 0) + row.value,
    }),
  {}
)
console.log(result)


const Results: FC = () => {
  return (
    <div className={`wrapper ${styles.results}`}>
      <div className={`container padding ${styles.results_container}`}>
        {Object.entries(result).map((item, index) => (
          <b key={index}>
            {item[0]} : {item[1]} <br />
          </b>
        ))}
      </div>
    </div>
  )
}
export default Results
