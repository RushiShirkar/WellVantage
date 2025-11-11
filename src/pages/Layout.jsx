import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { Outlet, useLocation, NavLink } from "react-router-dom";
import plusIcon from "../assets/plusIcon.png";

const ROUTE_TITLES = {
  "/dashboard": "Dashboard",
  "/lead-management": "Lead Management",
  "/lead-management/new": "Lead Management",
};

export default function Layout() {
  const location = useLocation();
  const title = ROUTE_TITLES[location.pathname] || "Dashboard";

  const headerChildren = location.pathname === "/lead-management" ? (
    <NavLink to="/lead-management/new">
      <img src={plusIcon} className="w-[32px] h-[32px] md:w-[48px] md:h-[53px]" alt="Plus Icon" />
    </NavLink>
  ) : null;

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar (fixed width) */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white overflow-hidden">
        <Header title={title}>{headerChildren}</Header>
        <div className="flex-1 overflow-auto px-6 pb-4">
          <Outlet />
        </div>
      </div>

    </div>
  );
}