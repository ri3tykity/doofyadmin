import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';


export const EmpEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="employee_name" label="Employee Name"/>
            <TextInput source="employee_email" label="Employee Email"/>
            <TextInput source="employee_salary" label="Employee Salary"/>
            <TextInput source="employee_age" label="Employee Age"/>
            <TextInput source="profile_image" label="Profile Image"/>
        </SimpleForm>
    </Edit>
);