import React from "react";
import style from "./Overview.module.scss";
import { useCollectionsData } from "../../hooks/useCollectionsData";
import { FaCaretRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Overview = () => {
  const { data, isPending } = useCollectionsData();
  console.log(data);

  return (
    <div className={style.overviewContainer}>
      <h1 className={style.overTitle}>Overview</h1>
      <div className={style.overviewContent}>
        <ul className={style.overAmounts}>
          <li className={style.overAmountsItem}>
            <p className={style.currentBalanceTitle}>Current Balance</p>
            <p className={style.currentBalance}>
              ${data && data.balance.current}.00
            </p>
          </li>
          <li className={style.overAmountsItem}>
            <p className={style.currentBalanceTitle}>Income</p>
            <p className={style.currentBalance}>
              ${data && data.balance.income}
            </p>
          </li>
          <li className={style.overAmountsItem}>
            <p className={style.currentBalanceTitle}>Expenses</p>
            <p className={style.currentBalance}>
              ${data && data.balance.expenses}
            </p>
          </li>
        </ul>

        <div className={style.overAllInfos}>
          <div className={style.potsTran}>
            {/* pots start */}
            <div className={style.pots}>
              <div className={style.potsTitleView}>
                <h2 className={style.potsTitle}>Pots</h2>
                <NavLink to="/posts">
                  <p className={style.viewPots}>
                    See Details <FaCaretRight />
                  </p>
                </NavLink>
              </div>

              <ul className={style.potsContent}>
                <li className={style.potsContentItem}>
                  <img src="./images/icon-pot.svg" alt="" />
                  <div className={style.itemInto}>
                    <p className={style.itemIntoTotalSaved}>Total Saved</p>
                    <h5 className={style.itemIntoTotalSavedAmount}>$850</h5>
                  </div>
                </li>

                <li className={style.potsContentItem}>
                   {data && data.pots.slice(0,4).map((d)=>{
                     return <div className={style.itemIntoDiv}>
                      <div className={style.itemIntoLine}></div>
                      <div className={style.itemIntoContent}>
                      <p className={style.itemIntoTotalSavedSecond}>{d.name}</p>
                      <h5 className={style.itemIntoTotalSavedAmountSecond}>${d.total}</h5>
                      </div>
                   </div>
                   })}
                  
                </li>
              </ul>
            </div>
            {/* pots end */}
            <div className={style.tran}>tran</div>
          </div>

          <div className={style.budgetBills}>
            <div className={style.budgets}>budget</div>
            <div className={style.bills}>bills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
