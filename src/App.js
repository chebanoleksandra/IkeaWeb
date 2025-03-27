import React from 'react';
import './App.css';
import { MainComponent } from './components/Main';
import { LogIn } from './components/logIn';
import { SignUp } from './components/signUp';


class App extends React.Component {

  render() {
    return (
      <div>
        {/* <MainComponent></MainComponent> */}
        {/* <LogIn></LogIn> */}
        <SignUp></SignUp>
      </div>


    );
  }
}
export default App;
