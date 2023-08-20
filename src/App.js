import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Table } from 'react-bootstrap';
function App() {
  // map looping
  // const students = ['Kunal', 'Giri', 'Rohit', 'Aman'];/
  const users = [
    {
      name: "Kunal", email: "kunal@demo.com", address: [
        { Hn: "51", city: "faridabad", country: "India" },
        { Hn: "26", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "32", city: "Gurgoan", country: "India" },
      ]
    },
    {
      name: "Goswami", email: "goswami@demo.com", address: [
        { Hn: "51", city: "faridabad", country: "India" },
        { Hn: "26", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "32", city: "Gurgoan", country: "India" },
      ]
    },
    {
      name: "Rohit", email: "rohit@demo.com", address: [
        { Hn: "51", city: "faridabad", country: "India" },
        { Hn: "26", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "32", city: "Gurgoan", country: "India" },
      ]
    },
    {
      name: "Aman", email: "aman@demo.com", address: [
        { Hn: "51", city: "faridabad", country: "India" },
        { Hn: "26", city: "Noida", country: "India" },
        { Hn: "45", city: "Delhi", country: "India" },
        { Hn: "32", city: "Gurgoan", country: "India" },
      ]
    },
  ]

  return (
    <div className='App'>
      <h1>Nested Array with List</h1>
      <Table variant='dark' striped>
        <tbody>
          <tr>
            <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {
            users.map((item,i) =>
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table variant='dark' striped>
                    <tbody>{
                      item.address.map((data) =>
                        <tr>
                          <td>{data.Hn}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;