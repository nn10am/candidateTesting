import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';

function MultipleChoiceQuestionDetail() {
    const {id} =useParams();
    console.log(`Id câu hỏi này là : ${id}`);
    const [details,setDetails]=useState({name:"",answerMC1:"",answerMC2:"",answerMC3:"",answerMC4:"",answerCorect:"",GroupID:""});
    let navigate=useNavigate();


    
useEffect(() =>{
  axios.get(`http://localhost:3000/MultipleChoice/${id}`).then((res) =>{
    console.log("Dây là res",res.data);
    setDetails({
      name:res.data.contentMC,
      answerMC1:res.data.answerMC[0],
      answerMC2:res.data.answerMC[1],
      answerMC3:res.data.answerMC[2],
      answerMC4:res.data.answerMC[3],
      answerCorect:res.data.correctAnswer,
      GroupID:res.data.GroupID
    });
  });
    
  },[]);
  const CloseHandle =() =>{
    navigate("/MultipleChoiceQuestions"); 
  }
 
  return (
    <div>
        <button className='backbutton' onClick={CloseHandle}><i className="fa-solid fa-circle-left"></i></button>
        <h3>Danh mục:{details.GroupID}</h3>
       <h3>Câu hỏi:{details.name}</h3> 
       <p>Lựa chọn 1:{details.answerMC1}</p>
       <p>Lựa chọn 2:{details.answerMC2}</p>
       <p>Lựa chọn 3:{details.answerMC3}</p>
       <p>Lựa chọn 4:{details.answerMC4}</p>
       <p>Đáp án đúng là:{details.answerCorect}</p>
        
    </div>
  )
}

export default MultipleChoiceQuestionDetail