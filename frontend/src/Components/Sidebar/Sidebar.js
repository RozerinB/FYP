import React, {useState} from 'react'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import {Link} from 'react-router-dom'
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import "./Sidebar.css"

function Sidebar() {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: "undefined" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <IoIcons.IoMdGlobe onClick={showSidebar} style = {{color: 'white'}}/>
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
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
  
export default Sidebar
