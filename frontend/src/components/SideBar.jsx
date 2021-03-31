import React, { useContext, useState } from "react";
import "../assets/scss/sidebar.scss";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { IdContext } from "../hooks/IdContext";

const SideBar = ()=>{
    const sideBarData = require("./temp-json/sidebar.json").data;
    const history = useHistory();
    const [menu,showMenu] = useState(false);
    const { itemsId,subItemsId } = useContext(IdContext);
    const [id,selectedId] = itemsId;
    const [subId,selectedSubId] = subItemsId;

    const renderSidebar = ()=>{
        const sideBarItems = [];
        sideBarData.map((sideBarItem)=>{
            let sideBarItemClsString = "sidebar-item";
            let sideBarItemTextClsString = "sidebar-item-text";
            let selected = false;

            let subItemsRenderHandler = ()=>{
                selectedId(sideBarItem.id);
                if(sideBarItem.tabs){
                    menu ? showMenu(false) : showMenu(true);
                }
                else{
                    // history.push(sideBarItem.link);
                    console.log("linking");
                }

            };
            let renderSubItems = ()=>{
                let sideBarSubItemClsString = "sidebar-item-sub";
                let sideBarSubItemTextClsString = "sidebar-item-sub-text";
                let sideBarMenu = [];
                sideBarItem.tabs.map((subItems,index)=>{

                    const subItemsIdHandler = ()=>{
                        selectedSubId(subItems.id);
                        history.push(subItems.link);
                    };

                    if(subId === subItems.tabId){
                        sideBarSubItemClsString = "sidebar-item-sub-selected";
                        sideBarSubItemTextClsString = "sidebar-item-sub-text-selected";
                    }

                    sideBarMenu.push(
                        <div onClick={subItemsIdHandler}  className={sideBarSubItemClsString} key={index}>
                            <span className={sideBarSubItemTextClsString}>
                                {subItems.text}
                            </span>
                        </div>
                    );
                });
                return sideBarMenu;
            };

            if(id === sideBarItem.id){
                sideBarItemClsString = "sidebar-item sidebar-item-selected";
                sideBarItemTextClsString = "sidebar-item-text sidebar-item-text-selected";
                selected = true;
            }
            sideBarItems.push(
                <div onClick={subItemsRenderHandler} className={sideBarItemClsString} key={sideBarItem.id}>
                    <div style={{ display: "flex" }}>
                        <Icon name={sideBarItem.icon} size={"large"} color={selected ? "blue" : "grey"} style={{ margin: "0 1rem" }}/>
                        <div className={sideBarItemTextClsString}>
                            <div>{sideBarItem.text}</div>
                        </div>
                    </div>
                    <div>
                        { menu && sideBarItem.tabs ? renderSubItems() : null}
                    </div>
                </div>
            );
        });
        return sideBarItems;
    };
    return(
        <div className='sidebar-main-container'>
            <NavLink to='/' className='sidebar-header-container'>
                <img src='' alt=''/>
            </NavLink>
            <div className='sidebar-item-container'>
                {renderSidebar()}
            </div>
        </div>
    );
};
export default SideBar;
