import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainComponent, Products, Rooms, Design } from './components/Main';
import { LogIn } from './components/logIn';
import { SignUp } from './components/signUp';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route index element={<MainComponent />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="products" element={<Products />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="design" element={<Design />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;

