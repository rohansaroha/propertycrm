import React from 'react';
import HeaderIcon from "../../base/HeaderIcon";
import TableView from "../../base/TableView";

const AttendanceAddPane = ()=>{
    return(
        <div className='aap-main-container'>
            <HeaderIcon filter={true} header='Students'/>
            <TableView/>
        </div>
    )
}
export default AttendanceAddPane;
