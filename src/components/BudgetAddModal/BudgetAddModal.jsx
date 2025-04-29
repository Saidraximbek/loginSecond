import React, { useEffect, useState } from "react";
import style from "./BudgetAddModal.module.scss";
import BudgetSelect from "../BudgetSelect";
const BudgetAddModal = ({ setOpenModal }) => {
  const [isActive, setIsActive] = useState(false);
  const obj = {};
  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(() => {
      setOpenModal(false);
    }, 300);
    kerak;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    Object.assign(obj, data);
    console.log("Formdan olingan ma'lumotlar:", obj);
  };

  return (
    <div className={style.addModalContainer}>
      <div className={style.overflow} onClick={handleClose}></div>
      <div className={`${style.modalContent} ${isActive ? style.active : ""}`}>
        <div className={style.modalheader}>
          <h3 className={style.modalTitle}>Add New Budget</h3>
          <img
            src="./images/icon-close-modal.svg"
            alt="close"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
        </div>
        <p className={style.modalSubtitle}>
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>

        <form className={style.budgetForm} onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <label htmlFor="category">Budget Category</label>
            <select id="category" name="category" className={style.selectInput}>
              <option>Entertainment</option>
              <option>Bills</option>
              <option>Groceries</option>
              <option>Dining Out</option>
              <option>Transportation</option>
              <option>Personal Care</option>
              <option>Education</option>
            </select>
          </div>

          <div className={style.formGroup}>
            <label htmlFor="amount">Maximum Spend</label>
            <div className={style.currencyInput}>
              <span>$</span>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="e.g. 2000"
              />
            </div>
          </div>

          <div className={style.formGroup}>
            <label htmlFor="theme">Theme</label>
            <BudgetSelect />
          </div>

          <button type="submit" className={style.submitBtn}>
            Add Budget
          </button>
        </form>
      </div>
    </div>
  );
};

export default BudgetAddModal;
