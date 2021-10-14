import React from "react";
import * as FaIcons from "react-icons/fa";
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <>
            <div className="nav">
                <Link to = "#" className='menu-bars'>
                    <FaIcons.FaBars/>
                </Link>
            </div>
        </>
    )
}
export default Nav