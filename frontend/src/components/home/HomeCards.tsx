import React from "react";
import DetailsCard from "../base/DetailsCard";

const HomeCards = ()=>{
    return(
        <div className="home-card-container">
            <DetailsCard text={"Rs 10,000"} header={"Total Cash Received"} color={"#63b863"}/>
            <DetailsCard text={"Rs 99,000"} header={"Total Cheque Received"} color={"#f6b030"}/>
            <DetailsCard text={"Rs 1,000"} header={"Total NEFT Received"} color={"#2766cc"}/>
        </div>
    );
};
export default HomeCards;
