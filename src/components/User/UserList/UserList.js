import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" label="User Id"/>
            <TextField source="user_name" label="User Name"/>
            <EmailField source="user_email" label="User Email"/>
            <TextField source="user_phone" label="User Phone"/>
            <TextField source="user_age" label="User Age"/>
            <UrlField source="profile_image" label="Profile Image"/>
        </Datagrid>
    </List>
);