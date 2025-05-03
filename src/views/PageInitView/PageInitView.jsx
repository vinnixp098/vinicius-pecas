import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import { FooterComponent } from "../../components/FooterComponent/FooterComponent";

export function PageInitView() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      // height: "100vh"
    }}>
      <HeaderComponent />
      <div style={{
        // flex: 1,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // overflow: "auto"
      }}>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}
