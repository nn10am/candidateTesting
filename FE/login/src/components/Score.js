import React from "react";
import axios from "axios"; 




class Xemdiem extends React.Component {

    state= {
        listUsers:[]
    }

   /* componentDidMount() {
        axios.get('http://localhost:3000/Admins')
            .then (res => {
                console.log('>>>check res',res.data)
            })
    }
    */
   async componentDidMount() {
       let res =await axios.get('http://localhost:3000/Scores')
       this.setState({
           listUsers: res && res.data? res.data:[]
       })
   }
   
   render(){
    let {listUsers} =this.state;
    return(
        <div className="list-user-container"> 
            <h3 className="title">
                Bảng điểm các ứng viên
            </h3>
            <div className="list-user-content">
               
            </div>
         
                
                        <table id="customers">
                        <tr>
                            <th>ID</th>
                            <th>Họ và tên</th>
                            <th>Email</th>
                            <th>Điểm trắc nghiệm</th>
                            <th>Điểm tự luận</th>
                            <th>Điểm đánh giá</th>
                        </tr>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item,index) => {
                             return (
                                <tr className="child" key={item.id}> 
                                    <td>{item.id }</td>
                                    <td>{item.name}</td>  
                                    <td>{item.email}</td>
                                    <td>{item.scoreMC}</td>
                                    <td>{item.scoreEss}</td>
                                    <td>{(item.scoreEss+item.scoreMC+0)/2}</td>
                                    
                                 </tr>

                    )
                    })
                 }
                        </table>
            
        </div>
    )
}
}
export default Xemdiem