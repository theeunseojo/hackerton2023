import React from "react";
import Sidebar from "./side/Sidebar";
import Homediv from "./homediv/Homediv";
import Styles from "./nav/nav.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import Homediv_health from "./homediv/Homediv_health";
import Homediv_edu from './homediv/Homediv_edu';
import Homediv_house from "./homediv/Homediv_house";
import Homediv_help from "./homediv/Homediv_help";

function Home() {
    const [isShow, setIsshow] = useState(0);
    const trafShow = () => {
        setIsshow(0);
    }
    const medShow = () => {
        setIsshow(1);
    }
    const eduShow = () => {
        setIsshow(2);
    }
    const houseShow = () => {
        setIsshow(3);
    }
    const taxShow = () => {
        setIsshow(4);
    }
    return(
        <div >
            <div className="sidebar">
                 <Sidebar /> 
            </div>
            
            <div>
            <div>
            <form class="nav_search" action="">
                <input className="nav_search_input" type="search" placeholder="Search here..." required />
                <button className="nav_search_btn" type="submit">검색</button>
            </form> 
            <div className="nav_div">
                <nav >
                    <div className="nav_bar">
                        <ul className="nav_ul">
                            <li>
                                <a className="nav_a" onClick={trafShow} >교통</a>
                            </li>
                            <li>
                                <a className="nav_a" onClick={medShow}>의료</a>
                            </li>
                            <li>
                                <a className="nav_a" onClick={eduShow}>교육</a>
                            </li>
                            <li>
                                <a className="nav_a" onClick={houseShow}>금융</a>
                            </li>
                            <li>
                                <a className="nav_a" onClick={taxShow} >복지</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            
            </div>

        </div>
            {isShow === 0 ? <Homediv/> : null}
            {isShow === 1 ? <Homediv_health/> : null}
            {isShow === 2 ? <Homediv_edu/> : null}
            {isShow === 3 ? <Homediv_house/> : null}
            {isShow === 4 ? <Homediv_help/> : null}
                

            </div>
        </div>
        
    );
}

export default Home;