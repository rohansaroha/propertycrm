import React from "react";
import { Tab } from "semantic-ui-react";
import HomeBooking from "./HomeBooking";
import HomePlots from "./HomePlots";

const panes = [
    {
        menuItem: "LIST",
        render: () => <Tab.Pane attached={false}><HomeBooking/></Tab.Pane>,
    },
    {
        menuItem: "ADD",
        render: () => <Tab.Pane attached={false}><HomePlots programme={true} header='Add Event'/></Tab.Pane>,
    }
];

const HomeTabs  = ()=>{
    return(
        <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
    );
};
export default HomeTabs;
