import React from 'react';
import {Form} from "semantic-ui-react";
import ProfileAddProfileDetails from "./ProfileAddProfileDetails";
import '../../../assets/scss/components/students/profile/profileAddPersonalDetails.scss';

const ProfileAddPersonalDetails = ()=>{
    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
    ]

    return (
        <div className="paped-main-container">
            <div className="paped-header">
                <span>Personal Details</span>
            </div>
            <ProfileAddProfileDetails/>
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input label='Student Aadhaar' placeholder='99999999'/>
                    <Form.Input label='Student Email' placeholder='rohan@gmail.com'/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Student Contact' placeholder='99999999'/>
                    <Form.Input label='Academic Term' placeholder='abc'/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='House' placeholder='New Boston'/>
                    <Form.Input label='Date of Admission' placeholder='01/05/2021'/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Religion' placeholder='General'/>
                    <Form.Select
                        fluid
                        label='Caste/Category'
                        options={options}
                        placeholder='Select'
                    />
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Input label='Nationality' placeholder='Indian'/>
                    <Form.Input label='Languages' placeholder='Hindi'/>
                </Form.Group>
                <Form.Input label='Mother Tongue' placeholder='Hindi'/>
            </Form>
        </div>
    )
}
export default ProfileAddPersonalDetails;
