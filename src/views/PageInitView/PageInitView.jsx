import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";
import "./PageInitView.css"; 

export function PageInitView() {
  return (
    <div className="container">
      <HeaderComponent />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
