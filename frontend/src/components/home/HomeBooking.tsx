import React from "react";
import { Tab } from "semantic-ui-react";
import AnnouncementTableViewPane from "../announcements/AnnouncementTableViewPane";
import TableView from "../base/TableView";

const listPanes = [
    {
        menuItem: { key: "Today's Booking",icon: "table",content: "Today's Booking" },
        render: () => <Tab.Pane attached={false}><TableView/></Tab.Pane>,
    },
    {
        menuItem: { key: "Today's Alloted Plots",icon: "list layout",content: "Today's Alloted Plots" },
        render: () => <Tab.Pane attached={false}><AnnouncementTableViewPane/></Tab.Pane>,
    }
];

const HomeBooking  = ()=>{
    return(
        <Tab panes={listPanes} />
    );
};
export default HomeBooking;
