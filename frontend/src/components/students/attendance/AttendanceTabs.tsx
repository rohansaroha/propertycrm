import React from "react";
import { Tab } from 'semantic-ui-react';
import AttendanceAddPane from "./AttendanceAddPane";
import AttendanceReportPane from "./AttendanceReportPane";
import AttendanceReportCardPane from "./AttendanceReprtCardPane";

const panes = [
    {
        menuItem: 'LIST',
        render: () => <Tab.Pane attached={false}><AttendanceAddPane/></Tab.Pane>,
    },
    {
        menuItem: 'REPORT',
        render: () => <Tab.Pane attached={false}><AttendanceReportPane/></Tab.Pane>,
    },
    {
        menuItem: 'REPORT CARD',
        render: () => <Tab.Pane attached={false}><AttendanceReportCardPane/></Tab.Pane>,
    }
]

const AttendanceTabs  = ()=>{
    return(
        <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
    )
}
export default AttendanceTabs;
