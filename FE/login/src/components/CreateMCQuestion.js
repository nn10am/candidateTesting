import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function CreateMCQuestion() {
  const [details, setDetails] = useState({ name: "", answerMC1: "", answerMC2: "", answerMC3: "", answerCorect: "", GroupID: "cat01" });

  let navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    let res = await axios.get('http://localhost:5000/multi-choice')
    const id = await (Math.max(...res.data.map(e => e.id)) + 1)

    await axios.post(`http://localhost:5000/multi-choice/`, {
      id: id,
      content: details.name,
      choice1: details.answerMC1,
      choice2: details.answerMC2,
      choice3: details.answerMC3,
      answer: details.answerCorect,
      categoryID: details.GroupID,
      adminID: 1,
    })
    navigate("/MultipleChoiceQuestions");
  }

  const CloseHandle = () => {
    navigate("/MultipleChoiceQuestions");
  }
  return (
    <form>
      <div className="form-inner">
        <h2>Form tạo câu hỏi mới</h2>

        <div className='form-group'>
          <label htmlFor='name'>Nhập nội dung câu hỏi</label>
          <textarea name="name" id="name" rows="5" cols="180" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerMC1'>Lựa chọn thứ nhất</label>
          <textarea name="answerMC1" id="answerMC1" rows="2" cols="180" onChange={e => setDetails({ ...details, answerMC1: e.target.value })} value={details.answerMC1} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerMC2'>Lựa chọn thứ 2</label>
          <textarea name="answerMC2" id="answerMC2" rows="2" cols="180" onChange={e => setDetails({ ...details, answerMC2: e.target.value })} value={details.answerMC2} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerMC3'>Lựa chọn thứ 3</label>
          <textarea name="answerMC3" id="answerMC3" rows="2" cols="180" onChange={e => setDetails({ ...details, answerMC3: e.target.value })} value={details.answerMC3} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerCorect'>Đáp án đúng là</label>
          <textarea name="answerCorect" id="answerCorect" rows="2" cols="180" onChange={e => setDetails({ ...details, answerCorect: e.target.value })} value={details.nswerCorect} />
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



        <button className='buttonsubmitAdd' onClick={submitHandler}>Add New</button> <button className='buttonsubmitAdd' onClick={CloseHandle}>Đóng</button>
      </div>
    </form>



  )
}

export default CreateMCQuestion;