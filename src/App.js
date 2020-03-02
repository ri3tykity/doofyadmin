import React, { Component } from 'react';
import './App.css';
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { EmployeeList } from '../src/components/Employee/EmployeeList/EmployeeList';
import { EmpEdit } from '../src/components/Employee/EmpEdit/EmpEdit';
import { EmpCreate } from '../src/components/Employee/EmpCreate/EmpCreate';
import { UserList} from '../src/components/User/UserList/UserList';
import { UserEdit } from '../src/components/User/UserEdit/UserEdit';
import { UserCreate} from '../src/components/User/UserCreate/UserCreate'
import AuthProvider from '../src/components/AuthProvider/AuthProvider'
import superDataProvider from '../src/customFunctions/superDataProvider'

const dataProvider = jsonServerProvider("https://my-json-server.typicode.com/debojyotichatterjee9/myjsonserver");

class App extends Component {

    render() {
    return (
      <div className="App">
        <Admin dataProvider={ dataProvider } authProvider={ AuthProvider }>
          <Resource name="users" list={ UserList } edit={ UserEdit } create={ UserCreate }/>
          <Resource name="employees" list={ EmployeeList } edit={ EmpEdit } create={ EmpCreate }/>
          <Resource name="items" list={ EmployeeList } edit={ EmpEdit } create={ EmpCreate }/>  
          </Admin>
      </div>
    );
  }
}

export default App;
