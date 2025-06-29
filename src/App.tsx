import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";
import Mypage from "./components/Mypage.tsx";
import NasaData from "./components/NasaData.tsx";  // インポート


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
