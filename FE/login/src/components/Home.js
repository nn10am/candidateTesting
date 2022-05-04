import React from 'react';
import './Home.css';

import {Link} from "react-router-dom";
function Home() {
  return (
  
    <div>
        <nav>
                <ul className="main-menu">
                    <li>
                      <Link to= "/">Trang chủ</Link>
                    </li>
                     <li>
                       <Link to ="/test-exam">Tạo bộ đề</Link>
                      </li>
                     <li className =" Quanlycauhoi">
                       <Link to ="/create-question" >Quản lý câu hỏi</Link>
                       <ul className='sub-menu'>   
                          <li>
                            <Link to="/EssayQuestions" > Câu hỏi tự luận</Link>
                          </li>
                          <li>
                            <Link to="/MultipleChoiceQuestions" > Câu hỏi trắc nghiệm</Link>
                          </li>
                   
                       </ul>
                      </li>
                    <li>
                      <Link to ="/score ">Xem điểm</Link>
                    </li>
                  
                    <li>
                      <Link to="/user" > Xem bài làm</Link>
                    </li>
                   
                    
                    
                </ul>  
                
        </nav>
        
    </div>
   
  )
}

export default Home