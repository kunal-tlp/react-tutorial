import logo from './logo.svg';
import './App.css';
import User from './User';
function App() {
  return (
    <div className='App'>
      <User data={{name: "Kunal Giri", age:24}} />
    </div>
  )
}

export default App;