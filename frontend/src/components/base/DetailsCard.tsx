import React from "react";
import "../../assets/scss/base/detailsCard.scss";

interface IDetailsCard  {
    text:string,
    header:string,
    color:string
}

const DetailsCard = (props:IDetailsCard)=>{
    return (
        <div className='detailsCard-container'>
            <div>
                <div className='detailsCard-text' style={{ color: props.color }}>
                    <span>{props.text}</span>
                </div>
                <div className="detailsCard-header" style={{ color: props.color }}>
                    <span>{props.header.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
};
export default DetailsCard;
