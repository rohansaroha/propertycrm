import React from 'react';
import {Form} from "semantic-ui-react";
import "../../../assets/scss/components/students/profile/profileAddProfileDetails.scss";

const ProfileAddProfileDetails = ()=>{

    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    return (
        <div className="paprd-main-container">
            <div className="paprd-profile-pm-container">
                <div className="paprd-profile-pm-image-container">
                    <img className='paprd-profile-pm-image' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' alt='profile Image'/>
                    <div className="paprd-profile-pm-image-button">
                        <span>UPLOAD PHOTO</span>
                    </div>
                </div>
                <div className="paprd-profile-pm-details-container">
                    <Form>
                        <Form.Input label='Full Name' placeholder='Rohan Saroha'/>
                        <Form.Input label='Student Id' placeholder='123'/>
                        <Form.Input label='Roll No' placeholder='12'/>
                        <Form.Input label='Date of Birth' placeholder='05/07/1998'/>
                    </Form>
                </div>
            </div>
            <div className='paprd-profile-sc-container'>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input label='Primary Contact' placeholder='99999999'/>
                        <Form.Input label='Primary Email' placeholder='rohan@gmail.com'/>
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select
                            fluid
                            label='Course'
                            options={options}
                            placeholder='Select'
                        />
                        <Form.Select
                            fluid
                            label='Batch'
                            options={options}
                            placeholder='Select'
                        />
                    </Form.Group>
                    <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                    />
                </Form>
            </div>
        </div>
    )
}
export default ProfileAddProfileDetails;
