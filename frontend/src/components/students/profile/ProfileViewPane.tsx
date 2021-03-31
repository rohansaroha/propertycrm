import React, {useState} from "react";
import {Button, Divider, Form, Grid, Input, Segment} from "semantic-ui-react";
import ProfileDetails from "./ProfileDetails";

const ProfileViewPane  = ()=>{
    const [step,setStep] = useState(1);

    const renderFilterStudents = ()=>{
        return(
            <div className="pvp-filter-container">
                <Segment placeholder>
                    <Divider vertical>Or</Divider>
                    <Grid columns={2} relaxed='very' stackable>
                        <Grid.Column>
                            <Form>
                                <Form.Input
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder='Username'
                                />
                                <Form.Input
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                />

                                <Button onClick={()=>{setStep(2)}} content='Login' primary />
                            </Form>
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                action={{ color: 'blue', content: 'Search' }}
                                icon='search'
                                iconPosition='left'
                                placeholder='Student Name :ID'
                            />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        )
    }

    const renderStepValues = ()=>{
        switch (step){
            case 1: return (<div>{renderFilterStudents()}</div>);
            case 2: return (<span onClick={()=>{setStep(1)}}><ProfileDetails/></span>);
        }
    }
    return (
        <div className = 'pvp-main-container'>
            {renderStepValues()}
        </div>
    )
}
export default ProfileViewPane;
