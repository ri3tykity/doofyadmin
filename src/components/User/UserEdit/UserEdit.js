import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';


export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" label="User Id" disabled/>
            <TextInput source="user_name" label="User Name"/>
            <TextInput source="user_email" label="User Email"/>
            <TextInput source="user_phone" label="User Phone"/>
            <TextInput source="user_age" label="User Age"/>
            <TextInput source="profile_image" label="Profile Image"/>
        </SimpleForm>
    </Edit>
);