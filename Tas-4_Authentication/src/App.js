import logo from './logo.svg';
import {Route} from "react-router-dom";
import { Routes } from 'react-router-dom';
import './App.css';
import Login from "./login"

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/login" element ={<Login />}></Route>
      </Routes> */}
      <Login/>
    </>
  );
}

export default App;
