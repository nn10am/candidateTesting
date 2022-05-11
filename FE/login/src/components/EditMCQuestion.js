import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';
function EditMCQuestion() {

  const { id } = useParams();
  console.log(`Id câu hỏi này là : ${id}`);
  const [details, setDetails] = useState({ name: "", answerMC1: "", answerMC2: "", answerMC3: "", answerMC4: "", answerCorect: "", GroupID: "" });


  useEffect(() => {
    axios.get(`http://localhost:5000/multi-choice`).then((res) => {
      console.log("Đây là res", res.data);
      setDetails({
        name: res.data.contentMC,
        answerMC1: res.data.answerMC[0],
        answerMC2: res.data.answerMC[1],
        answerMC3: res.data.answerMC[2],
        answerMC4: res.data.answerMC[3],
        answerCorect: res.data.correctAnswer,
        GroupID: res.data.GroupID,
      });
    });

  }, []);
  console.log("Danh sáchh>>>>>>", details.answerCorect, details.answerMC1, details.answerMC2, details.answerMC3, details.answerMC4, details.name);

  let navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    console.log(">>>", details);
    axios.put(`http://localhost:3000/MultipleChoice/${id}`, {
      Id_Admin: 1,
      contentMC: details.name,
      answerMC: [details.answerMC1, details.answerMC2, details.answerMC3, details.answerMC4],
      correctAnswer: details.answerCorect,
      GroupID: details.GroupID
    });
    navigate("/MultipleChoiceQuestions");
  }

  const CloseHandle = () => {
    navigate("/MultipleChoiceQuestions");
  }


  return (
    <form>
      <div className="form-inner">
        <h2>Form chỉnh sửa câu hỏi</h2>

        <div className='form-group'>
          <label htmlFor='name'>Nhập nội dung câu hỏi</label>
          <textarea name="name" id="name" rows="5" cols="180" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerMC1'>Lựa chọn thứ nhất</label>
          <textarea name="answerMC1" id="answerMC1" rows="2" cols="180" value={details.answerMC1} onChange={e => setDetails({ ...details, answerMC1: e.target.value })} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerMC2'>Lựa chọn thứ 2</label>
          <textarea name="answerMC2" id="answerMC2" rows="2" cols="180" value={details.answerMC2} onChange={e => setDetails({ ...details, answerMC2: e.target.value })} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerMC3'>Lựa chọn thứ 3</label>
          <textarea name="answerMC3" id="answerMC3" rows="2" cols="180" value={details.answerMC3} onChange={e => setDetails({ ...details, answerMC3: e.target.value })} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerMC4'>Lựa chọn thứ 4</label>
          <textarea name="answerMC4" id="answerMC4" rows="2" cols="180" value={details.answerMC4} onChange={e => setDetails({ ...details, answerMC4: e.target.value })} />
        </div>
        <div className='form-group'>
          <label htmlFor='answerCorect'>Đáp án đúng là</label>
          <textarea name="answerCorect" id="answerCorect" rows="2" cols="180" value={details.answerCorect} onChange={e => setDetails({ ...details, answerCorect: e.target.value })} />
        </div>

        <div className='form-group'>
          <label htmlFor='vaitro' className='required'>Danh mục câu hỏi</label>
          <input type="text" name="vaitro" list="questionlist" placeholder='Chọn' onChange={e => setDetails({ ...details, GroupID: e.target.value })} value={details.GroupID} />
          <datalist id="questionlist">
            <option value="Bí quyết trở thành nhà quản lý giỏi" />
            <option value="Kĩ năng quản lý dự án" />
            <option value="Bí quyết quản lý thời gian hiệu quả" />
            <option value="Kĩ năng học tập hiệu quả" />
            <option value="Bí quyết cân bằng cuộc sống" />
            <option value="Sử dụng trí tuệ cảm xúc trong công việc" />
            <option value="Kĩ năng trình bày vấn đề rõ ràng" />
          </datalist>
        </div>



        <button className='buttonsubmitAdd' onClick={submitHandler}>Lưu thay đổi</button> <button className='buttonsubmitAdd' onClick={CloseHandle}>Đóng</button>
      </div>
    </form>



  )
}

export default EditMCQuestion