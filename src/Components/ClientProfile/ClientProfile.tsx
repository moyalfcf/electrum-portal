import { Component } from "react";
import React, { useState } from 'react';
import ObjectForm from '../../ObjectForm.tsx';
import {Form, SimpleItem} from 'devextreme-react/form'

class ClientProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            object: {
                property1: 'test',
                property2: 42,
                property3: true
            }
        };
    }    

    object = {
        property1: 'test',
        property2: 42,
        property3: true
    };

    handleSave = (formData) => {
        // Handle saving the edited object (e.g., send it to a server)
        console.log('Saving object:', formData);
        this.setState({ object: formData }); // Update the object in the component's state
    };
    
    formFieldDataChanged(e) {
        var temp = e.component.option("formData");
        alert(temp);
    }

    render() {       
        return (
            <div>
                <h1>Edit Object Properties</h1>
                <ObjectForm object={this.object} onSubmit={this.handleSave} />
                <h1>Edit Object Properties in Form</h1>
                <Form formData={this.object} onFieldDataChanged={this.formFieldDataChanged}>
                    <SimpleItem dataField="property1" />
                    <SimpleItem dataField="property1" />
                </Form>
            </div>
        );
    }
}

export default ClientProfile;