import React from 'react';
import HeaderIcon from "../../base/HeaderIcon";
import TableView from "../../base/TableView";

const AttendanceReportCardPane = ()=>{
    return(
        <div className='arcp-main-container'>
            <HeaderIcon filter={true} header='Report Cards'/>
            <TableView/>
        </div>
    )
}
export default AttendanceReportCardPane;
