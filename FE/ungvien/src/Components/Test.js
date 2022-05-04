import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Clock from './Clock';
import "./Test.css";
import {useNavigate} from 'react-router';

function Test( {name,email,phone,madethi}) {

   
    const[listIdQuestion,setListIdQuestion]=useState([]);//danh sách id câu hỏi bài test
    const[listQuestionMC,setListQuestionMC] =useState([]);//danh sách câu trắc nghiệm
    const[listQuestionEss,setListQuestionEss] =useState([]); // danh sách câu tự luận
    const[listAnswers,setListAnswers] =useState([]);
    const[answerEss,setAnswerEss] =useState([]);

    let navigate =useNavigate();
    
const HandlerABC=()=>{
 
}

  
    
  
    
    useEffect(() =>{ //1
                        axios.get(`http://localhost:3000/test/`).then((res) =>{

                                for(let  i=0;i<res.data.length;i++){
                                  if(res.data[i].made===madethi*1){
                                    setListIdQuestion(res.data[i].listIdQuestion);
                                  }
                                }
                        });
                        console.log(">>>>>>>........",listIdQuestion);
                        axios.get(`http://localhost:3000/MultipleChoice/`).then((res) =>{
                          setListQuestionMC(res.data);            
                        });
                        axios.get(`http://localhost:3000/Essay/`).then((res) =>{
    
                          setListQuestionEss(res.data); 
                      });
        
        },[]);
        console.log("Đây là câu trả lời",listAnswers);
        console.log("Đây là câu trả lời",answerEss);


        const SubmitHandler = () =>{
    
          if (window.confirm('Bạn có chắc chắn muốn nộp bài không?'))
              {
                  axios.post(`http://localhost:3000/Ungvien/`,{
                    nameUV:name,
                    emailUV:email,
                    sdtUV:phone,
                    answerMCUV:listAnswers,
                    AnswerEssUV:answerEss
  
                                             
              });
              navigate("/Finish");
          }
      }

        
           
  return (
    <div><p>Họ và tên   : {name}  </p> 
        
        <p>Mã đề thi  :{madethi} </p>
        
        <Clock HandlerABC={HandlerABC}/>
    
    <h3>Phần 1:Trắc nghiệm</h3>
   
                            {listQuestionMC && listQuestionMC.length > 0 &&
                                listQuestionMC.map((item,index) => {
                            
                                   
                                    if(listIdQuestion.includes(item.id)){
                                    
                                      
                                 return (
                                   
                                    <div className='form-radio'>
                                    <p>Câu hỏi{index}:{item.contentMC}</p> <br/>
                                    <div onChange={e =>setListAnswers([...listAnswers.filter(itemm => itemm.idQuestion!==item.id),{idQuestion:item.id,Question:item.contentMC,Answer:e.target.value}])}>
                                    <input name={item.contentMC} type="radio"   value={item.answerMC[0]} />A:{item.answerMC[0]} <br/>
                                    <input name={item.contentMC} type="radio"  value={item.answerMC[1]} />B:{item.answerMC[1]} <br/>
                                    <input name={item.contentMC} type="radio"  value={item.answerMC[2]} />C:{item.answerMC[2]} <br/>
                                    <input name={item.contentMC} type="radio"  value={item.answerMC[3]} />D:{item.answerMC[3]} <br/>
                                    </div>
                                 </div>
                                        
                        );}
                        
                        })
                     }
                  
                    
                     


                   
                     <h3>Phần 2:Tự luận</h3>
                     {listQuestionEss && listQuestionEss.length > 0 &&
                                listQuestionEss.map((item,index) => {
                                    const key=item.id;
                                    console.log(key);
                                    if(listIdQuestion.includes(key)){
                                 return (
                                    <div> 
                                      
                                        <div> Câu 1:{item.contentEss}</div>  
                                        <div className='bailam'>Bài làm</div>
                                        <textarea rows="30" cols="180" className='TextEss' placeholder='Nhập câu trả lời' onChange={e =>setAnswerEss([...answerEss.filter(itemm => itemm.idQuestion!==item.id),{idQuestion:item.id,questionEss:item.contentEss,AnswerEss:e.target.value}])}/>

                                    </div>
                            

                        );}
                        })
                     }
                     <button className='submitButton' onClick={SubmitHandler} >Nộp bài</button>
                            
    </div>
  )
}

export default Test