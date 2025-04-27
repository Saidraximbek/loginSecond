import React from 'react'
import styles from "./Posts.module.scss"
import { useCollectionsData } from '../../hooks/useCollectionsData'

const Posts = () => {
  const { data } = useCollectionsData()

  return (
    <div className={styles.container}>
      {data && data.pots.map((p) => (
        <div key={p.id} className={styles.postCard}>
          <p className={styles.name}>{p.name}</p>
          <p className={styles.target}>Target: {p.target}</p>
          <p className={styles.amount}>Amount: {p.total}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
