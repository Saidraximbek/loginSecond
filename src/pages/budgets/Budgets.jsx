import React from 'react'
import style from "./Budgets.module.scss"
import { Chart } from "../../components/Chart";
import { useCollectionsData } from '../../hooks/useCollectionsData'
const Budgets = () => {
  const {data} = useCollectionsData()
  return (
    <div>
      {data && <Chart budgets={data.budgets}/>}
    </div>
  )
}

export default Budgets