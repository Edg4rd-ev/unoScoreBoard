import React, { useState } from 'react'
import styles from './count.module.css'
import { FiMinus, FiRefreshCcw, FiPlus } from 'react-icons/fi'

export default function Count(props) {
  const [numCount, setNumCount] = useState(0)

  const plus = () => {
    setNumCount(numCount + 1)
  }

  const minus = () => {
    setNumCount(numCount - 1)
  }

  const reset = () => {
    setNumCount(0)
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.names}>
          <p className={styles.name}>{props.name}</p>
        </div>
        <div className={styles.card} style={{ backgroundColor: props.color }}>
          <div className={styles.count1}>
            <p className={styles.number}>{numCount}</p>
          </div>
          <div className={styles.countMain}>
            <p className={styles.number}>{numCount}</p>
          </div>
          <div className={styles.count2}>
            <p className={styles.number}>{numCount}</p>
          </div>
        </div>
        <div className={styles.commands}>
          <button
            type="button"
            onClick={plus}
            className={styles.btn}
            style={{ backgroundColor: props.color }}
          >
            <FiPlus />
          </button>
          <button
            type="button"
            onClick={reset}
            className={styles.btn}
            style={{ backgroundColor: props.color }}
          >
            <FiRefreshCcw />
          </button>
          <button
            type="button"
            onClick={minus}
            className={styles.btn}
            style={{ backgroundColor: props.color }}
          >
            <FiMinus />
          </button>
        </div>
      </div>
    </div>
  )
}
