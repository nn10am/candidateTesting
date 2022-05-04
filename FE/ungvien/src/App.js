import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Finish from './Components/Finish';
import LoginForm from './Components/FormLogin';
import Test from './Components/Test';


function App() {

  const [error, setError] = useState("");
  const [user, setUser] = useState({ name: "", email: "", phone: "", maDethi: "" });


  const Login = (details, listMaDeA) => {
    if (details.name !== "" && details.email !== "" && details.phone !== "" && listMaDeA.includes(details.maDethi * 1)) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
        phone: details.phone,
        maDethi: details.maDethi
      });

    } else if (details.name === "" || details.email === "" || details.phone === "") {

      setError("Bạn cần nhập đủ thông tin");
    }
    else {
      setError("Nhập mã đề chưa chính xác")
    }
  }


  if (user.email === "") {

    return (
      <div>
        <LoginForm Login={Login} error={error} /></div>
    );
  }
  else {


    return (
      <div>
        <Routes>
          <Route path="/" element={<Test name={user.name} email={user.email} phone={user.phone} madethi={user.maDethi} />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </div>
    )
  }
}

export default App