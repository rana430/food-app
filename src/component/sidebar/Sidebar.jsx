import React, { useState } from 'react'
import { Link} from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { FiBookOpen } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";
const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div
            className={`sidebar-div ${sidebarOpen ? "sidebar-open" : "sidebar-close"
                } shadow bg-body-tertiary rounded`}
        >
            <div>
                <Link to="/ ">
                    <LuLayoutDashboard /> <p>Dashboard</p>
                </Link>
                <Link to="/analystic">
                    <FiBookOpen /> <p>Analysitic</p>
                </Link>
                <Link to="/Customer ">
                    <SlHandbag /> <p>Customer </p>
                </Link>
                <Link to="/message">
                    <TiMessages />
                    <p>Message </p>
                </Link>
                <Link to="/setting">
                    <FiSettings />
                    <p>Setting </p>
                </Link>
            </div>
            <div>

                <Link to="/logout">
                    <BiLogOutCircle /> <p>Log out</p>
                </Link>
                <div
                    style={{ marginLeft: "auto" }}
                    onClick={() => setSidebarOpen((pre) => !pre)}
                >
                    <GiHamburgerMenu />
                </div>
            </div>

        </div>
    )
}

export default Sidebar