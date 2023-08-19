import logo from './logo.svg';
import './App.css';
import React from 'react';

function App()
{
  const [status, setStatus]= React.useState(false)
  return(
    <div className='App'>
        {
          status? <h1>Hello World</h1>:null
        }
        <button onClick={()=>setStatus(!status)}>Update</button>
    </div>
  )
}

export default App;