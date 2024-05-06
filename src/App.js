import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./componets/Register";
import Login from "./componets/Login";
import Mypage from "./componets/Mypage";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
       <Routes>
         <Route path={`/register/`} element={<Register />}/>
         <Route path={`/login/`} element={<Login />}/>
         <Route path={`/mypage/`} element={<Mypage />}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
