import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logoutIcon from '../assets/logout.png';
import dashboardIcon from '../assets/dashboard.png';
import leadsIcon from '../assets/leads.png';
import Button from './Button';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        onClick={() => setOpen(true)}
        size="sm"
        className="md:hidden fixed top-3 left-4 z-50"
        aria-label="Menu"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      {/* Mobile Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-full w-64 bg-[#D6E5D4] flex flex-col justify-between p-6
          transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Top: Logo & Title */}
        <div>
          <div className="flex flex-col items-center mb-8">
            <img src={logo} alt="WellVantage" className="w-[111px] h-[102px]" />
            <p className="font-poppins font-semibold text-xl mt-2">WellVantage</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            <NavLink
              to="/dashboard"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md font-poppins font-medium transition
                ${isActive ? "bg-green-600" : "text-gray-800 hover:bg-gray-200"}`
              }
            >
              <img src={dashboardIcon} className="w-[23px] h-[23px]" alt="" /> Dashboard
            </NavLink>

            <NavLink
              to="/lead-management"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-md font-poppins font-medium transition
                ${isActive ? "bg-green-600" : "text-gray-800 hover:bg-gray-200"}`
              }
            >
              <img src={leadsIcon} className="w-[23px] h-[23px]" alt="" /> Lead Management
            </NavLink>
          </nav>
        </div>

        {/* Bottom: Logout (centered) */}
        <div className="mt-auto flex justify-center">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-2 text-gray-800 font-poppins transition"
          >
            <img src={logoutIcon} className="w-full h-full" alt="Logout icon" />
            Logout
          </NavLink>
        </div>

      </aside>
    </>
  );
}