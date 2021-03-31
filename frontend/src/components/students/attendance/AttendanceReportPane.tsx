import React from 'react';
import HeaderIcon from "../../base/HeaderIcon";
import TableView from "../../base/TableView";

const AttendanceReportPane = ()=>{
    return(
        <div className='arp-main-container'>
            <HeaderIcon filter={true} header='Reports'/>
            <TableView/>
        </div>
    )
}
export default AttendanceReportPane;
