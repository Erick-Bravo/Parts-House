import React, {useState} from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import "./index.css"








const LeftNavBar = () => {

    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)

    return (
        <>
            <div id="leftNavBar">
                <Link to="#" id='left-menu-bars'>
                    <FaIcons.FaBars />
                </Link>
            </div>
            <nav className={sideBar ? "left-nav-menu active" : "left-nav-menu"}>
                <ul className="left-nav-items">
                    <li className="left-menu-bars">
                        <Link to="#" className='left-menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default LeftNavBar