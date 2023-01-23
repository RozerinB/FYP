import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

export const SidebarData = [
    {
        title: "Home",
        path:"/",
        icons: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "About",
        path:"/about",
        icons: <FaIcons.FaCartArrowDown />,
        cName: "nav-text"
    }
]