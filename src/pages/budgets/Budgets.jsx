import React, { useState } from 'react'
import BudgetAddModal from '../../components/BudgetAddModal/BudgetAddModal.jsx'
import style from "./Budgets.module.scss"
const Budgets = () => {
  const [openmodal, setOpenModal] = useState(false)
  return (
    <div className={style.budgetsContainer}>
      <div className={style.budgetsAddTitle}>
        <h2 className={style.budgetsTitle}>Budgets</h2>
        <button className={style.budgetsBtn} onClick={()=>setOpenModal(true)}>+ Add New Budget</button>
       {openmodal && <BudgetAddModal setOpenModal={setOpenModal} />}
        
      </div>
    </div>
  )
}

export default Budgets