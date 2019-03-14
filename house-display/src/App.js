import React from 'react';
import './App.css';
import ChooseItem from "./components/ChooseItem";


class App extends React.Component{
  render() {
    return (
        <div className="App">
          <ChooseItem/>
        </div>
    );
  }
}
export default App;
