import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const EmployeeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="id" label="Employee Id"/>
            <TextField source="employee_name" label="Employee Name"/>
            <EmailField source="employee_email" label="Employee Email"/>
            <TextField source="employee_salary" label="Employee Salary"/>
            <TextField source="employee_age" label="Employee Age"/>
            <UrlField source="profile_image" label="Profile Image"/>
        </Datagrid>
    </List>
);