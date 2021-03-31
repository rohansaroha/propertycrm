import React from 'react';
import Layout from "../../base/Layout";
import AttendanceTabs from "./AttendanceTabs";

const Attendance = ()=>{
    return(
        <Layout header='Attendance'>
            <AttendanceTabs/>
        </Layout>
    )
}
export default Attendance;
