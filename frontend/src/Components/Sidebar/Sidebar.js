import React from "react";
import * as IoIcons from "react-icons/io"
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData"
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        <nav className={"sidebar"}>
          <ul className="sidebar-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
