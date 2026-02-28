import React, {useState} from "react";
import "./styles/Portal.css";
import { useNavigate } from "react-router-dom";
// import { logout } from "./auth/Auth";

function Portal() {
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    console.log("activeMenu:", activeMenu);

    const renderContent = () => {
        switch(activeMenu) {
            case "dashboard":
                return <h2>داشبورد اصلی</h2>
            case "profile":
                return <h2>پروفایل کاربر</h2>
            case "settings":
                return <h2>تنظیمات</h2>
        }
    };

    const logout = () => {
      localStorage.removeItem("authWebToken");
      navigate("/login");
    }

    return (
        <div className="portal-layout">
      {/* Navbar */}
      <div className="portal-navbar">
        <button
          className="menu-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <div className="portal-user">
          <span>کاربر: admin</span>
          <button
           className="logout-btn" onClick={() => logout()}>خروج</button>
        </div>
      </div>

      <div className="portal-body">
        <div className={`portal-sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => setActiveMenu("dashboard")}>داشبورد</li>
            <li onClick={() => setActiveMenu("profile")}>پروفایل</li>
            <li onClick={() => setActiveMenu("settings")}>تنظیمات</li>
          </ul>
        </div>

        <div className="portal-content">{renderContent()}</div>
      </div>
    </div>
    );

}

export default Portal;