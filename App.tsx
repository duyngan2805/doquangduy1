import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { type } from "os";
import "./App.css";
import Form from "./container/bai2";
import dataUsers from "./data/dtUsers";
/*
const data: any[] = [
  {
    Company: "ahfaf",
    Contact: "ahfaf",
    Country: "ahfaf",
  },
  {
    Company: "ifef",
    Contact: "eif",
    Country: "iownef",
  },
];*/

function App() {
const App = () => {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <div className="abc">
      <table
        className="tableUsers"
        align={"center"}
        width={"1200px"}
        cellSpacing={"0"}
        cellPadding={"5px"}
        border={1}
      >
        <thead>
          <tr>
            <th rowSpan={2}>ID</th>
            <th rowSpan={2}>FirstName</th>
            <th rowSpan={2}>LastName</th>
            <th rowSpan={2}>Gender</th>
            <th rowSpan={2}>Birthday</th>
            <th colSpan={3}>Address</th>
            <th rowSpan={2}>Phone</th>
            <th rowSpan={2}>Email</th>
            <th rowSpan={2}>Active</th>
            <th rowSpan={2}>Create At</th>
            <th rowSpan={2}>Update At</th>
            <th rowSpan={2}>Delete At</th>
          </tr>
          <tr>
            <th>Province</th>
            <th>City</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {dataUsers.map((user) => {
            return (
              <tr key={user.Id}>
                <th>{user.Id}</th>
                <th>{user.FirstName}</th>
                <th>{user.LastName}</th>
                <th>{user.Gender}</th>
                <th>{user.Birthday}</th>
                <th>{user.address.province}</th>
                <th>{user.address.city}</th>
                <th>{user.address.address}</th>
                <th>{user.Phone}</th>
                <th>{user.Email}</th>
                <th>{user.Active}</th>
                <th>{user.Created_at}</th>
                <th>{user.Updated_at}</th>
                <th>{user.Deleted_at}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="wrap-tabs">
        <div className="tabs">
          <div className="tab-item active">1</div>
          <div className="tab-item ">2</div>
          <div className="tab-item ">3</div>
          <div className="tab-item ">4</div>
          <div className="line"></div>
        </div>
      </div>
    </div>
    <Form></Form>
    </>
  );
}
};

// Homework css table
// tao 1 form input

// styled-component
// ant.design

// .less
// sass
export default App;