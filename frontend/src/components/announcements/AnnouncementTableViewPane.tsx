import React from "react";
import HeaderIcon from "../base/HeaderIcon";
import TableView from "../base/TableView";

const AnnouncementTableViewPane = ()=>{
    return(
        <div>
            <HeaderIcon filter={false} header='Alloted Plots'/>
            <TableView/>
        </div>
    );
};
export default AnnouncementTableViewPane;
