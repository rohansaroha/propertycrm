import React from "react";
import { Tab } from 'semantic-ui-react';
import ProfileViewPane from "./ProfileViewPane";
import ProfileListPane from "./ProfileListPane";
import ProfileAddPane from "./ProfileAddPane";

const panes = [
    {
        menuItem: 'VIEW',
        render: () => <Tab.Pane attached={false}><ProfileViewPane/></Tab.Pane>,
    },
    {
        menuItem: 'LIST',
        render: () => <Tab.Pane attached={false}><ProfileListPane/></Tab.Pane>,
    },
    {
        menuItem: 'ADD',
        render: () => <Tab.Pane attached={false}><ProfileAddPane/></Tab.Pane>,
    }
]

const ProfileTabs  = ()=>{
    return(
        <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
    )
}
export default ProfileTabs;
