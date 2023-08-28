import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./navbar";
import { Login } from "./login";
import { Home } from "./home";
import { Register } from "./register";
import { Contact } from "./contact";
import "./login/Login.css";
import { Parent } from "./useContextDemo/Parent";
import ParentComponent from "./useCallbackDemo/ParentComponent";

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
          <Route path="parent" Component={Parent}></Route>
          <Route path="parentUseCallback" Component={ParentComponent}></Route>
          <Route path="/" exact Component={Home}></Route>
          <Route path="*" Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
