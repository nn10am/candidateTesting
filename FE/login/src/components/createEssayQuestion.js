import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function CreateEssayQuestion() {
  const [details, setDetails] = useState({ name: "", GroupID: "cat01" });

  let navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    let res = await axios.get('http://localhost:5000/essay')
    const id = await (Math.max(...res.data.map(e => e.id)) + 1)
    await axios.post(`http://localhost:5000/essay`, {
      id: id,
      content: details.name,
      categoryID: details.GroupID,
      adminID: 1,
    })
    navigate("/EssayQuestions");
  }

  const CloseHandle = () => {
    navigate("/EssayQuestions");
  }
  return (

    <form >
      <div className='form-inner'>
        <h2>Form tạo câu hỏi mới</h2>

        <div className='form-group'>
          <label htmlFor='name'>Nhập nội dung câu hỏi</label>
          <textarea name="name" id="name" rows="8" cols="180" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
        </div>
        <div className='form-group'>
          <label htmlFor='vaitro' className='required'>Danh mục câu hỏi</label>
          <select id="questionlist" placeholder='Chọn' onChange={e => setDetails({ ...details, GroupID: e.target.value })} value={details.GroupID} >
            <option value="cat01">Bí quyết trở thành nhà quản lý giỏi</option>
            <option value="cat02">Kĩ năng quản lý dự án</option>
            <option value="cat03">Bí quyết quản lý thời gian hiệu quả</option>
            <option value="cat04">Kĩ năng học tập hiệu quả</option>
            <option value="cat05">Bí quyết cân bằng cuộc sống</option>
            <option value="cat06">Sử dụng trí tuệ cảm xúc trong công việc</option>
            <option value="cat07">Kĩ năng trình bày vấn đề rõ ràng</option>
          </select>
        </div>

        <button className='buttonsubmitAdd' onClick={submitHandler}>Add New</button>

        <button className='buttonsubmitAdd' onClick={CloseHandle}>Đóng</button>
      </div>
    </form >




  )
}

export default CreateEssayQuestion