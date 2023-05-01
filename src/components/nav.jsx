import React, { Fragment, useEffect, useState } from "react";
import classes from "./nav.module.css";
import logo from "../utils/Logo.svg";
import cross from "../utils/cross.svg";
import list from "../utils/list.svg"

const Nav = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    useEffect(() => {
        navClickhandler(0)
    }, [navClickhandler]);

    function navClickhandler(ind) {
        let ele = [...document.getElementsByClassName(classes.link)];
        ele.forEach(
            (ele, i) => {
                if (ind == i) {
                    ele.classList.add(classes.active);
                } else {
                    ele.classList.remove(classes.active);
                }
            }
        )
    }
    function sidebarHandler() {
        setShowSideBar(prev => !prev);
    }
    return (<div className={classes.nav}>
        <img src={logo} alt="" />
        <ul className={classes.webList}>
            <li onClick={() => navClickhandler(0)} id="trade" className={classes.link}>Trade</li>
            <li onClick={() => navClickhandler(1)} id="earn" className={classes.link}>Earn</li>
            <li onClick={() => navClickhandler(2)} id="support" className={classes.link}>Support</li>
            <li onClick={() => navClickhandler(3)} id="about" className={classes.link}>About</li>
        </ul>
        <button className={classes.webList} onClick={sidebarHandler}>Connect wallet</button>
        <img onClick={sidebarHandler} className={classes.mobileIcon} src={list} alt="" />

        {showSideBar && <div className={classes.Sidebar}>
            <div className={classes.modal}>
                <div className={classes.body}>
                    <div onClick={sidebarHandler} className={classes.cross}><img height="10px" src={cross} alt="" /></div>
                    <div>
                        <ul>
                            <li>Trade</li>
                            <li>Earn</li>
                            <li>Support</li>
                            <li>About</li>
                            <li>
        <button  onClick={sidebarHandler}>Connect wallet</button>

                            </li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>}
    </div>)
}

export default Nav;