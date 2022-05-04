import React,{useState,useEffect} from 'react'
import axios from 'axios';
import"./FormLogin.css"

function LoginForm({Login,error}) {
    const [details,setDetails]=useState({name:"",email:"",phone:"",maDethi:""});
    const [listMaDeA,setListMaDeA] =useState([]);
    const submitHandler = e => {
        e.preventDefault();
        Login(details,listMaDeA);
        
    }

    useEffect(() =>{ //1
        axios.get(`http://localhost:3000/test/`).then((res) =>{

            for(let b=[], i=0;i<res.data.length;i++){
                let a=res.data[i].made;
                b=b.concat(a);
                console.log("mã đề mới làaaaaa",b);
                
                setListMaDeA(b);
              }
              
        });

},[]);
  return ( 
      <div className='HomeLogin'>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Tham gia đánh giá năng lực </h2>
                {(error !== "") ? ( <div className='error'>{error}</div>) : ""}
                <div className='form-group'>
                 <label htmlFor='name'>Nhập họ và  tên của bạn:</label>
                    <input type="text" name="name" id="name"  onChange={ e => setDetails({...details, name:e.target.value})} value={details.name}/>
                </div>
                <div className='form-group'>
                 <label htmlFor='phone'> Nhập số điện thoại:</label>
                    <input type="number" name="phone" id="phone"  onChange={ e => setDetails({...details, phone:e.target.value})} value={details.phone}/>
                </div>
                <div className='form-group'>
                 <label htmlFor='email'>Nhập email:</label>
                    <input type="email" name="email" id="email"  onChange={ e => setDetails({...details, email:e.target.value})} value={details.email}/>
                </div>
                <div className='form-group'>
                 <label htmlFor='made'>Nhập mã để làm bài:</label>
                    <input type="number" name="made" id="made"  onChange={ e => setDetails({...details, maDethi:e.target.value})} value={details.maDethi}/>
                </div>
                
                 
                <input type="submit" value="Bắt đầu làm bài" />
            </div>
        </form>
    </div>
  )
}

export default LoginForm