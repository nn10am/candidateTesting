import React from "react";
import axios from "axios"; 
import "./EssayQuestion.css";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router';



class EssayQuestion extends React.Component {

    constructor(props){
        super(props);
       
        this.state={
            listUsers:[],
            
        }
    }
    
   // state= {
     //   listUsers:[]
   // }

    
    
   /* componentDidMount() {
        axios.get('http://localhost:3000/Essay')
            .then (res => {
                console.log('>>>check res',res.data)
            })
    }
    */
   async componentDidMount() {
       let res =await axios.get('http://localhost:3000/Essay')
       this.setState({
           listUsers: res && res.data? res.data:[]
       })
   }
   
   // hàm xóa câu hỏi
   essQuestionDeleteHandler = (idDelete) =>{
    
        if (window.confirm('Bạn có chắc chắn muốn xóa không?'))
            {
                axios.delete(`http://localhost:3000/Essay/${idDelete}`) ;

                let currenUsers=this.state.listUsers;
                currenUsers =currenUsers.filter(item => item.id!==idDelete);
                this.setState({
                 listUsers:currenUsers                            
            })
        }
   }
   
   
    
    render(){
        let {listUsers} =this.state;
        console.log("Đây là list câu hỏi tự luận",listUsers);
       
        return(
            <div className="list-user-container"> 
          
            
            <div className="mx-1">
            <button className="themcauhoi" ><i className="fa-solid fa-plus"></i><Link className="linkCreate" to="/EssayQuestions/create">Thêm mới</Link></button>
            
            </div>
                <h3 className="title">
                    Danh sách câu hỏi tự luận
                </h3>
                <div className="list-user-content">
                   
                </div>
             
                    
                            <table id="customers">
                            <tr>
                                <th>ID</th>
                                <th>Nội dung câu hỏi</th>
                                <th>Chỉnh sửa</th>
                            </tr>
                            {listUsers && listUsers.length > 0 &&
                                listUsers.map((item,index) => {
                                    const key=item.id;
                                    console.log(key);
                                    
                                 return (
                                    <tr className="child" key={item.id}> 
                                        <td>{key}</td>
                                        <td>{item.contentEss}</td>  
                                        <td><Link  className="editbutton" to={`/EssayQuestions/edit/${key}`}><i className="fa-solid fa-pencil"/></Link>
                                            <button className="deletebutton" onClick={()=>this.essQuestionDeleteHandler(key)}><i className="fa-solid fa-trash"></i></button></td>
                                     </tr>

                        )
                        })
                     }
                            </table>
                
            </div>
        )
    }
}

export default EssayQuestion;
