import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import style from "./MainLayout.module.scss";
import NavBottom from "../components/navbottom/NavBottom";

const MainLayout = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.sidebarWrapper}>
        <Sidebar />
      </div>
      <div className={style.contentWrapper}>
        <div className={style.outletWrapper}>
          <Outlet />
        </div>
        <NavBottom />
      </div>
    </div>
  );
};

export default MainLayout;
