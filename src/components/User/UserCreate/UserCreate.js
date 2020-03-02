import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" label="User Id" disabled/>
            <TextInput source="user_name" label="User Name"/>
            <TextInput source="user_email" label="User Email"/>
            <TextInput source="user_salary" label="User Phone"/>
            <TextInput source="user_age" label="User Age"/>
            <TextInput source="profile_image" label="User Image"/>
        </SimpleForm>
    </Create>
);