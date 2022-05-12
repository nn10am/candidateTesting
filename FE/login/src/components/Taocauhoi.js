import React, { useState, useEffect } from 'react'
import './Taocauhoi.css'
import axios from 'axios';
function Taocauhoi() {
  const [province, setProvince] = useState([])

  useEffect(() => {
    axios.get(`https://provinces.open-api.vn/api/p/`).then((res) => {
      setProvince(res.data);
    });

  }, []);
  province.map((item, index) => {
  })

  return <></>
}

export default Taocauhoi
