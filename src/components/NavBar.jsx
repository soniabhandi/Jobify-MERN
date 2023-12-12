import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { IoMdHome } from "react-icons/io";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";

const NavBar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <div className="logo-text">dashboard</div>
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Wrapper>
  );
};

export default NavBar;
