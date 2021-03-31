import React from "react";
import { Button, Dropdown, Form, Header, Icon, Input, Message, Segment, Select, TextArea } from "semantic-ui-react";
import "../../assets/scss/components/announcements/announcementsAddPane.scss";

interface IAddPaneProps{
    programme:boolean
    header:string
}

const HomePlots = (props:IAddPaneProps)=>{
    const programmeDropdownOptions = [
        { key: "Jenny Hess", text: "Jenny Hess", value: "Jenny Hess" },
        { key: "Elliot Fu", text: "Elliot Fu", value: "Elliot Fu" },
        { key: "Stevie Feliciano", text: "Stevie Feliciano", value: "Stevie Feliciano" }
    ];
    const renderAddForm = ()=>{
        const uploadResponseOptions = [
            { key: "yes", text: "Yes", value: "true" },
            { key: "no", text: "No", value: "false" },
        ];
        return(
            <Form warning>
                <Form.Group widths='equal'>
                    <Form.Input className='input-details' label='Title' placeholder='abc'/>
                    <Form.Input className='input-details' label='Youtube Link' placeholder='https://www.youtube.com/trending'/>
                </Form.Group>
                <Form.Input className='input-details' label='Description' placeholder='lorem Ipsum'/>
                <Form.Group widths='equal'>
                    <Form.Select
                        fluid
                        label='Can Student Upload Response'
                        options={uploadResponseOptions}
                        placeholder='Select'
                    />
                    <Form.Select
                        fluid
                        label='Place'
                        options={uploadResponseOptions}
                        placeholder='Select'
                    />
                </Form.Group>
                <Segment placeholder>
                    <Header icon>
                        <Icon name='image' />
                        Add Images
                    </Header>
                    <Segment.Inline>
                        <Button primary>Images</Button>
                        <Button>Upload Files</Button>
                    </Segment.Inline>
                </Segment>
                <Form.Checkbox
                    inline
                    label='Send SMS to Non Application Users'
                    required
                />
                <Form.Checkbox
                    inline
                    label='Send SMS to Non Application Users'
                    required
                />
                <Message
                    warning
                    header='Notes'
                    list={["Users available on application will always receive Notification","Text in Description will be sent as SMS content"]}
                />
                <div className='acap-submit-button'>
                    <span>
                        Submit
                    </span>
                </div>
            </Form>
            );
    };
    return(
        <div className='acap-main-container' style={{ padding: "0 5rem" }}>
            {props.programme ? (<div className='acap-programme-dropdown'>
                    <Form.Select
                        fluid
                        label='Programme'
                        options={programmeDropdownOptions}
                        placeholder='Select'
                    />
                </div>) : null}
            <div className='acap-content-container'>
                <div className="acap-content-header"><span>{props.header}</span></div>
                <div className='acap-form-container'>{renderAddForm()}</div>
            </div>
        </div>
    );
};
export default HomePlots;
