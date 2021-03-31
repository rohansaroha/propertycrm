import React from "react";
import Header from "./Header";
import "../../assets/scss/components/layout.scss";
import SideBar from "../SideBar";

const Layout = (props)=>{
    return(
        <div className='layout-container'>
            <div className='layout-navbar-container'>
                <SideBar/>
            </div>
            <div className='layout-content-container'>
                <div className='layout-header'>
                    <Header primaryHeader={props.header}/>
                    {props.children}
                </div>
            </div>
        </div>
    );
};
export default Layout;
