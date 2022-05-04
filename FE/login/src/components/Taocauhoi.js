import React ,{useState,useEffect}from 'react'
import './Taocauhoi.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Taocauhoi() {
  const[province,setProvince]=useState([])

  useEffect(() =>{
    axios.get(`https://provinces.open-api.vn/api/p/`).then((res) =>{
      console.log("Dây là res",res.data);
    setProvince(res.data);
    });
      
    },[]);
    console.log(">>>>>>",province);
    
      province.map((item,index) => {
        
      console.log(">>>>>>>>>>>>tên tỉnh:",item.name,"MÃ tỉnh:",item.code);


})


  
  return <></>
  

}

export default Taocauhoi
