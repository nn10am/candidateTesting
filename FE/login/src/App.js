import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateEssayQuestion from "./components/createEssayQuestion";
import CreateMCQuestion from "./components/CreateMCQuestion";
import LoginForm from "./components/LoginForm";
import Xemdiem from "./components/Score";
import Taobode from "./components/Taobode";
import Taocauhoi from "./components/Taocauhoi";
import EditMCQuestion from "./components/EditMCQuestion";
import Home from "./components/Home";
import EssayQuestion from "./components/EssayQuestion";
import ListUser from "./users/ListUser";
import MultipleChoiceQuestion from "./components/MultipleChoiceQuestion";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import EditEssQuestion from "./components/EditEssQuestion";
import MultipleChoiceQuestionDetail from "./components/MultipleChoiceQuestionDetail";
import CreateTest from "./components/CreateTest";
import TestDetail from "./components/TestDetail";
function App() {



  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies("");
  let navigate = useNavigate();
  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");

      setCookie(details.email);
      console.log(">>Đây là cookie", cookies);
      setUser({
        name: details.name,
        email: details.email
      });

    } else {
      console.log("Thông tin đăng nhập chưa chính xác!");
      setError("Thông tin đăng nhập chưa chính xác!");
    }
  }
  const Logout = () => {
    setUser({ name: "", email: "" });
    setError("");
    navigate("/login");
  }
  if (user.email === "") {
    return (
      <LoginForm Login={Login} error={error} />
    );
  }
  else {
    return (
      <div className="welcome">
        <Home></Home>
        <h4>Welcome, <span>{user.name}</span></h4>
        <button id="buttonLogout" onClick={Logout}><i className="fa-solid fa-right-from-bracket"></i></button>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/score" element={<Xemdiem />} />
          <Route path="/create-question" element={<Taocauhoi />} />
          <Route path="/test-exam" element={<Taobode />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/user" exact element={<ListUser />} />
          <Route path="/EssayQuestions" exact element={<EssayQuestion />} />
          <Route path="/EssayQuestions/create" exact element={<CreateEssayQuestion />} />
          <Route path="/EssayQuestions/edit/:id" element={<EditEssQuestion />} />
          <Route path="/MultipleChoiceQuestions" element={<MultipleChoiceQuestion />} />
          <Route path="/MultipleChoiceQuestions/edit/:id" element={<EditMCQuestion />} />
          <Route path="/MultipleChoiceQuestions/view/:id" element={<MultipleChoiceQuestionDetail />} />
          <Route path="/MultipleChoiceQuestions/create" element={<CreateMCQuestion />} />
          <Route path="/TestExam/:id" element={<TestDetail />} />
          <Route path="/CreateTest" element={<CreateTest />} />
        </Routes>
      </div>
    );
  }
}

export default App;


