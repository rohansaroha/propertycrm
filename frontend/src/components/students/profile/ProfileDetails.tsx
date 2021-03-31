import React from 'react';
import {Card, Icon, Image} from "semantic-ui-react";
import '../../../assets/scss/components/students/profile/profileDetails.scss';

const ProfileDetails = ()=>{
    const renderContentDetailsContainer = ()=>{
        return(
            <div className="pd-pcontent-detail-main-container">
                <div className='pd-pcontent-detail-container'>
                    <div className="pd-pcontent-detail-header"><span>Id</span></div>
                    <div className="pd-pcontent-detail-value"><span>123</span></div>
                </div>
                <div className='pd-pcontent-detail-border'/>
            </div>
        )
    }
    const renderCardDetails = ()=>{
        return (
            <Card className='pd-card-main-container'>
                <Image src={'https://react.semantic-ui.com/images/avatar/large/matthew.png'} wrapped ui={false} />
                <Card.Content>
                    <div className="pd-card-pheader-container">
                        <div className="pd-card-pheader-text"><span>Rohan</span></div>
                        <div className="pd-card-pheader-buttons">
                            <Icon className='transform-icon' name='edit outline' color='green' size='large'/>
                            <Icon className='transform-icon' name='address card outline' color='blue' size='large'/>
                            <Icon className='transform-icon' name='delete' color='red' size='large'/>
                        </div>
                    </div>
                    <div className="pd-card-pcontent-container">
                        {renderContentDetailsContainer()}
                    </div>
                </Card.Content>
            </Card>
        )
    }
    const renderStudentSecondaryDetails = ()=>{
        return(
            <div className='pd-student-secondary-pcard-container'>
                <div className="pd-student-secondary-pcard">
                    <div className="pd-student-secondary-pcard-header">Personal Details</div>
                    <div className="pd-student-secondary-pcard-content">{renderContentDetailsContainer()}</div>
                </div>
                <div className="pd-student-secondary-pcard">
                    <div className="pd-student-secondary-pcard-header">Medical Details</div>
                    <div className="pd-student-secondary-pcard-content">{renderContentDetailsContainer()}</div>
                </div>
            </div>
        )
    }
    return (
        <div className="pd-main-container">
            <div className="pd-student-container">
                <div className="pd-student-primary-container">{renderCardDetails()}</div>
                <div className="pd-student-secondary-container">{renderStudentSecondaryDetails()}</div>
            </div>
            <div className="pd-parents-main-container">
                <div className='pd-parents-header'><span>Parents Details</span></div>
                <div className='pd-parents-container'>
                    <div className="pd-parents-father-container">
                        {renderCardDetails()}
                        <div className="pd-parents-father-header"><span>Father</span></div>
                    </div>
                    <div className="pd-parents-mother-container">
                        {renderCardDetails()}
                        <div className="pd-parents-mother-header"><span>Mother</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileDetails;
