import React from "react";
import "../../assets/scss/components/home/homeContent.scss";
import { Input, Form } from "semantic-ui-react";

const HomeContent = ()=>{
    const branchOptions = [
        {
            key: "Head Office",
            text: "Head Office",
            value: "Head Office"
        },
        {
            key: "Ellio",
            text: "Elliot Fu",
            value: "Elliot Fu"
        },
        {
            key: "Matt",
            text: "Matt",
            value: "Matt"
        },
        {
            key: "All",
            text: "All",
            value: "All"
        },
    ];

    return(
        <div className="hc-main-container">
            <div className='hc-filter-container'>
                <div className='hc-filter-branch'>
                    <Form.Select className={"hc-filter-branch-dropdown"} options={branchOptions} placeholder='Select Branch' />
                </div>
                <div className='hc-filter-date'>
                    <Input className='hc-filter-date-start' type='date' label='Starting Date'/>
                    <Input className='hc-filter-date-end' type='date' label='End Date'/>
                </div>
                <div className='hc-search-button'>
                    <span>Search</span>
                </div>
            </div>

        </div>
    );
};
export default HomeContent;
