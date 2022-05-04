import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';
function EditEssQuestion() {

    const {id} =useParams();
    console.log(`Id câu hỏi này là : ${id}`);
    const [details,setDetails]=useState({name:"",GroupID:""});

    
useEffect(() =>{
  axios.get(`http://localhost:3000/Essay/${id}`).then((res) =>{
    setDetails({name:res.data.contentEss,GroupID:res.data.GroupID});
  });
},[]);

 
  
  let navigate=useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    console.log("đây là câu hỏi trước khi put",details);
    axios.put(`http://localhost:3000/Essay/${id}`,{
      contentEss:details.name,
      GroupID:details.GroupID
    })
    navigate("/EssayQuestions");
}

  const CloseHandle =() =>{
    navigate("/EssayQuestions"); 
  }

 
  return (
   
    <form >
    <div className='form-inner'>
      <h2>Form chỉnh sửa câu hỏi</h2>
     
      <div className='form-group'>
       <label htmlFor='name'>Nhập nội dung câu hỏi</label>
          <textarea name="name" id="name" rows="8" cols="180"  value={details.name} onChange={ e => setDetails({...details, name:e.target.value})} />
      </div>
      <div className='form-group'>
                    <label htmlFor='vaitro'className='required'>Danh mục câu hỏi</label>
                    <input type="text" name="vaitro" list="questionlist"    onChange={ e => setDetails({...details, GroupID:e.target.value})} value={details.GroupID}/>
                      <datalist id="questionlist">
                        <option value="Bí quyết trở thành nhà quản lý giỏi"/>
                        <option value="Kĩ năng quản lý dự án"/>
                        <option value="Bí quyết quản lý thời gian hiệu quả"/>
                        <option value="Kĩ năng học tập hiệu quả"/>
                        <option value="Bí quyết cân bằng cuộc sống"/>
                        <option value="Sử dụng trí tuệ cảm xúc trong công việc"/>
                        <option value="Kĩ năng trình bày vấn đề rõ ràng"/>
                      </datalist>
                 </div>
      
       <button className='buttonsubmitAdd' onClick={submitHandler}>Lưu thay đổi</button> 
       
       <button className='buttonsubmitAdd' onClick={CloseHandle}>Đóng</button>
       </div>
  </form>
  
  )
}

export default EditEssQuestion