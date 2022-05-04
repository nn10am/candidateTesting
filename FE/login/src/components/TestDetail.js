import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';

function TestDetail() {
    const {id} =useParams();
    let navigate=useNavigate();
    const[listTestExam,setListTestExam]=useState([]);
    const[listQuestion,setListQuestion] =useState([]);
    const[listQuestionEss,setListQuestionEss] =useState([]);
    const[maDe,setMaDe] =useState();

    const getRandomInt = () => {
        return Math.floor(Math.random() * (1000000 - 100000)) + 100000;
      };
      

    const CloseHandle =() =>{
        
        navigate("/test-exam"); 
        
      }

    const TaoMaDe =() =>{
        var intMADE=getRandomInt();
        setMaDe(intMADE);
        console.log(`Random number : ${intMADE}`);
        axios.put(`http://localhost:3000/test/${id}`,{
            listIdQuestion:listTestExam,
            made:intMADE
        })
       
    }
     const  DeleteHandler = () =>{
    
        if (window.confirm('Bạn có chắc chắn muốn xóa không?'))
            {
                axios.delete(`http://localhost:3000/test/${id}`) ;                           
            }
        }
        useEffect(() =>{
            axios.get(`http://localhost:3000/test/${id}`).then((res) =>{
            
              setListTestExam(
                res.data.listIdQuestion
              );
              setMaDe(res.data.made);
              
            });
              
            },[]);
            console.log("Dây là list id question>>>>",listTestExam);
        useEffect(() =>{
            axios.get(`http://localhost:3000/MultipleChoice/`).then((res) =>{

            
                
                setListQuestion(
                res.data
                );
                
               
            });
                  
        },[]);
        useEffect(() =>{
            axios.get(`http://localhost:3000/Essay/`).then((res) =>{

            
                
                setListQuestionEss(
                res.data
                );
                
               
            });
                  
        },[]);
        console.log("Dây là list id question>>>>111",listQuestion);

       
            
            
           
                  
       
    
    
        
        
        




  return (
   
    <div> <button className='backbutton' onClick={CloseHandle}><i className="fa-solid fa-circle-left"></i></button>
        <button className='deleteTestbutton' onClick={DeleteHandler}>Delete</button>
        <button className='deleteTestbutton' onClick={TaoMaDe}>Cập nhật mã bài thi</button>
        <h3>BỘ ĐỀ SỐ {id}</h3>
        <div>MÃ ĐỀ THI LÀ : {maDe}</div>

        <table id="customers">
                            <tr>
                                <th>ID</th>
                                <th>Nội dung câu hỏi</th>
                            
                            </tr>
                            {listQuestion && listQuestion.length > 0 &&
                                listQuestion.map((item,index) => {
                                    const key=item.id;
                                    console.log(key);
                                    if(listTestExam.includes(key)){
                                 return (
                                    <tr className="child" key={item.id}> 
                                        <td>{key}</td>
                                        <td>{item.contentMC}</td>  
                                        
                                     </tr>

                        );}
                        })
                     }
                     <div>Tự luận</div>
                     {listQuestionEss && listQuestionEss.length > 0 &&
                                listQuestionEss.map((item,index) => {
                                    const key=item.id;
                                    console.log(key);
                                    if(listTestExam.includes(key)){
                                 return (
                                    <tr className="child" key={item.id}> 
                                        <td>{key}</td>
                                        <td>{item.contentEss}</td>  
                                        
                                     </tr>

                        );}
                        })
                     }
                            </table>
        </div>
  )
}

export default TestDetail