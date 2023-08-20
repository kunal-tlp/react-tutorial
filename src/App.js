import logo from './logo.svg';
import './App.css';
import React from 'react';
function App()
{
  // map looping
  // const students = ['Kunal', 'Giri', 'Rohit', 'Aman'];/
  const students = [
    {name: "Kunal", email:"kunal@demo.com", contact: 99898989898},
    {name: "Goswami", email:"goswami@demo.com", contact: 978784555454},
    {name: "Rohit", email:"rohit@demo.com", contact: 57548787520},
    {name: "Aman", email:"aman@demo.com", contact: 8787542221},
  ]

  return(
    <div className='App'>
      <h1>Handle Array with List</h1>
      <table className='table-bordered'>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {
          students.map((data)=>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          )
        }
      </table>
    </div>
  )
}

export default App;