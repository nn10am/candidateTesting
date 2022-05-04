import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router';

function CreateEssayQuestion() {
  const [details,setDetails]=useState({name:"",GroupID:""});

  let navigate=useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    console.log(details);
    axios.post(`http://localhost:3000/Essay/`,{
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
            <h2>Form tạo câu hỏi mới</h2>
           
            <div className='form-group'>
             <label htmlFor='name'>Nhập nội dung câu hỏi</label>
                <textarea name="name" id="name" rows="8" cols="180" onChange={ e => setDetails({...details, name:e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                    <label htmlFor='vaitro'className='required'>Danh mục câu hỏi</label>
                    <input type="text" name="vaitro" list="questionlist"  placeholder='Chọn'  onChange={ e => setDetails({...details, GroupID:e.target.value})} value={details.GroupID}/>
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
            
             <button className='buttonsubmitAdd' onClick={submitHandler}>Add New</button> 
             
             <button className='buttonsubmitAdd' onClick={CloseHandle}>Đóng</button>
             </div>
        </form>
        
        
   

  )
}

export default CreateEssayQuestion