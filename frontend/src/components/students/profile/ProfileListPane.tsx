import React from "react";
import HeaderIcon from "../../base/HeaderIcon";
import TableView from "../../base/TableView";

const ProfileListPane  = ()=>{
    return(
        <div className='plp-main-container'>
            <HeaderIcon filter={true} header='List Students'/>
            <TableView/>
        </div>
    )
}
export default ProfileListPane;
