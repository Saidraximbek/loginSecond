import React from 'react'
import styles from "./Transactions.module.scss"
import { useCollectionsData } from '../../hooks/useCollectionsData'

const Transactions = () => {
  const { data } = useCollectionsData()
  console.log(data);
  
  return (
    <div className={styles.container}>
      <ul>
        {data && data.transactions.map((t) => (
          <li key={t.id}>
            <div>
              <img src={t.avatar} alt={t.name} />
              <p>{t.name}</p>
            </div>

            <div>
              <p>{t.category}</p>
              <p>{t.date}</p>
            </div>

            <p>{t.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Transactions
