import React from 'react';
import { CommonContext } from './components/CommonContext';
import Main from './components/Main';
import UpdateButton from './components/UpdateButton';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super()
    this.updateColor = (color) => {
      this.setState({
        color: color
      })
    }
    this.state = {
      color: "green",
      updateColor: this.updateColor
    }
  }
  render() {
    return (
      <CommonContext.Provider value={this.state} >
        <Header />
        <h1>Complete and easy example</h1>
        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    )
  }
}

export default App;