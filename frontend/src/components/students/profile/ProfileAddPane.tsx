import React from 'react';
import ProfileAddPersonalDetails from "./ProfileAddPersonalDetails";
import ProfileAddParentsDetail from "./ProfileAddParentsDetail";
import ProfileAddMedicalDetails from "./ProfileAddMedicalDetails";
import '../../../assets/scss/components/students/profile/profileAddPane.scss';

const ProfileAddPane = ()=>{
    return(
        <div className='pap-main-container'>
            <ProfileAddPersonalDetails/>
            <ProfileAddParentsDetail/>
            <ProfileAddMedicalDetails/>
            <div className='pap-submit-button'>
                <span>Submit</span>
            </div>
        </div>
    )
}
export default ProfileAddPane;
