import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MultipleChoiceQuestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listUsers: [],

        }
    }

    /* componentDidMount() {
         axios.get('http://localhost:3000/Essay')
             .then (res => {
                 console.log('>>>check res',res.data)
             })
     }
     */
    async componentDidMount() {
        let res = await axios.get('http://localhost:5000/mclist')
        this.setState({
            listUsers: res && res.data ? res.data : []
        })
    }
    essQuestionDeleteHandler = (idDelete) => {

        if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
            axios.delete(`http://localhost:3000/MultipleChoice/${idDelete}`);

            let currenUsers = this.state.listUsers;
            currenUsers = currenUsers.filter(item => item.id !== idDelete);
            this.setState({
                listUsers: currenUsers
            })
        }
    }

    render() {
        let { listUsers } = this.state;

        return (
            <div className="list-user-container">
                <button className="themcauhoi"><i className="fa-solid fa-plus"></i> <Link className="linkCreate" to="/MultipleChoiceQuestions/create">Thêm mới</Link></button>
                <h3 className="title">
                    Danh sách câu hỏi trắc nghiệm
                </h3>
                <div className="list-user-content">

                </div>


                <table id="customers">
                    <tr>
                        <th>ID</th>
                        <th>Nội dung câu hỏi</th>

                        <th>Đáp án</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            const key = item.id;
                            return (
                                <tr className="child" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.contentMC}</td>
                                    <td>{item.correctAnswer}</td>
                                    <td>
                                        <Link className="editbutton" to={`/MultipleChoiceQuestions/edit/${key}`}><i className="fa-solid fa-pencil" /></Link>
                                        <Link className="editbutton" to={`/MultipleChoiceQuestions/view/${key}`}><i className="fa-solid fa-eye"></i></Link>
                                        <button className="deletebutton" onClick={() => this.essQuestionDeleteHandler(key)}><i className="fa-solid fa-trash"></i></button>

                                    </td>

                                </tr>

                            )
                        })
                    }
                </table>

            </div>
        )
    }
}
export default MultipleChoiceQuestion;