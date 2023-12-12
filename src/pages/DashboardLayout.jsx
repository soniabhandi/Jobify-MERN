import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { NavBar, SmallSidebar, BigSidebar } from "../components";
import { useState, useContext, createContext } from "react";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "john" };
  const [showSidebar, setshowSidebar] = useState(false);
  const [DarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark Theme");
  };

  const toggleSidebar = () => {
    setshowSidebar(!showSidebar);
  };

  const Logout = () => {
    console.log("user logged out");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        DarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        Logout,
      }}
    >
      <Wrapper>
        <main className="dashbaord">
          <SmallSidebar />
          <BigSidebar></BigSidebar>
          <div>
            <NavBar></NavBar>
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
