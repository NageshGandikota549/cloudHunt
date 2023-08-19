import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './navbar';
import  Login  from './login/Login';
import { Home } from './home';
import { Register } from './register';
import { Contact } from './contact';
import './login/Login.css'



export function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
        <Route path="login" Component={Login}></Route>
        <Route path="home" Component={Home}></Route>
        <Route path="register" Component={Register}></Route>
        <Route path="contact" Component={Contact}></Route>
        <Route path="/" exact Component={Home}></Route>
        <Route path="*" Component={Home}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

