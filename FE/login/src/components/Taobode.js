
import React ,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router';

function Taobode() {

    const [testExam,setTestExam]=useState([]);
    let navigate=useNavigate();
    useEffect(() =>{
        axios.get(`http://localhost:3000/test/`).then((res) =>{
            console.log("Đây là res>>>>",res.data)
          setTestExam(res.data);
        });
      },[]);
      console.log(">>>>",testExam)

      

      

      
      
  return (
    <div>
        <button className="themcauhoi" >
            <i className="fa-solid fa-plus"></i>
        <Link className="linkCreate" to="/CreateTest">Thêm mới</Link>
        </button>
        {testExam && testExam.length > 0 &&
                                testExam.map((item,index) => {
                                    
                                    
                                 return (
                                     <div>
                                     <Link className="examLink" to={`/TestExam/${item.id}`}>
                                    <h3 >
                                        BỘ ĐỀ SỐ {item.id} 
                                        
                                    </h3>
                                    </Link>
                                    
                                    </div>

                        )
                        })
                     }
      

    </div>
  )
}

export default Taobode