import { NavBarComponent } from "components/NavBar/NavBar";
import styles from "./PageInit.module.scss";
import { Outlet } from "react-router-dom";
import { FooterComponent } from "components/Footer/Footer";

export function PageInit() {
  return (
    <div className={styles.container}>
      <NavBarComponent />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
