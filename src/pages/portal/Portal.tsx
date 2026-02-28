import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/Portal.css";

function Portal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("authWebToken");
    window.location.href = "/login";
  };

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
          <button className="logout-btn" onClick={logout}>
            خروج
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="portal-body">
        <div className={`portal-sidebar ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/portal/dashboard"
                className={({ isActive }) =>
                  "nav-item" + (isActive ? " active" : "")
                }
              >
                داشبورد
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portal/profile"
                className={({ isActive }) =>
                  "nav-item" + (isActive ? " active" : "")
                }
              >
                پروفایل
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portal/settings"
                className={({ isActive }) =>
                  "nav-item" + (isActive ? " active" : "")
                }
              >
                تنظیمات
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="portal-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Portal;