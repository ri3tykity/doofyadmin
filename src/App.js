import React, { Component } from 'react';
import './App.css';
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { EmployeeList } from '../src/components/Employee/Employee';
import { EmpEdit } from '../src/components/EmpEdit/EmpEdit';
import { EmpCreate } from '../src/components/EmpCreate/EmpCreate'

const dataProvider = jsonServerProvider("https://my-json-server.typicode.com/debojyotichatterjee9/myjsonserver");

class App extends Component {

    render() {
    return (
      <div className="App">
        <Admin dataProvider={ dataProvider }>
          <Resource name="employees" list={ EmployeeList } edit={ EmpEdit } create={ EmpCreate }/>  
          </Admin>
      </div>
    );
  }
}

export default App;
