import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Mypage from "./components/Mypage";
import NasaData from "./components/NasaData";  // インポート


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
       <Routes>
         <Route path={`/register/`} element={<Register />}/>
         <Route path={`/login/`} element={<Login />}/>
         <Route path={`/mypage/`} element={<Mypage />}/>
         <Route path={`/nasa/`} element={<NasaData />} /> 
       </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
