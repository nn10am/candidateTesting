import React, { useEffect,useState } from 'react'


function Clock({HandlerABC}) {

  
    const[time,setTime]=useState();
    const[minutes,setMinutes]=useState();
    const[seconds,setSeconds]=useState();

    useEffect( ()=>{
        let a=3600;
        setInterval(()=>{
          
           setTime(a);
           setMinutes(Math.floor(a/60));
           setSeconds(a%60);
           a--;
           
        },1000)

    },[]);
    if(time==0){
      HandlerABC();
    }
  return (
    <h3>Thời gian còn lại:{minutes}:{`0${seconds}`.slice(-2)}</h3>
  )
}

export default Clock