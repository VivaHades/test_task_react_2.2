import React, { FC, useState, useEffect } from "react"
import styles from "./Pagination.module.scss"

interface IProps {
  page: number
  limit: number
  total: number
  setCurrentPage: Function
}

const Pagination: FC<IProps> = (props) => {
  const { page, limit, total, setCurrentPage } = props

  function toNextPage() {
    setCurrentPage((prev: number) =>
      prev < Math.ceil(total / limit) ? prev + 1 : Math.ceil(total / limit)
    )
  }
  function toPrevPage() {
    setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className={styles.pagination_container}>
      <button
      className={`${styles.button_prev} ${page === 1 ? styles.disabled: ''}`}
        onClick={toPrevPage}
        disabled={page === 1 ? true : false}
      >
        <svg className={`${styles.arrow}`} x="0px" y="0px" viewBox="0 0 34.075 34.075" width='17' height='17'>
          <g>
            <g>
              <path
                d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
			L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
			C25.58,33.883,25.075,34.075,24.57,34.075z"
              />
            </g>
          </g>
        </svg>
      </button>

      <div className={styles.pages}>
        <div className={styles.current_page}>{page}</div>/
        <div className={styles.total_pages}>{Math.ceil(total / limit)}</div>
      </div>

      <button
        className={`${styles.button_next} ${page === Math.ceil(total / limit) ? styles.disabled: ''}`}
        onClick={toNextPage}
        disabled={page === Math.ceil(total / limit) ? true : false}
      >
        <svg className={`${styles.arrow_next} ${styles.arrow}`} x="0px" y="0px" viewBox="0 0 34.075 34.075" width='17' height='17'>
          <g>
            <g>
              <path
                d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
			L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
			C25.58,33.883,25.075,34.075,24.57,34.075z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
  )
}

export default Pagination
