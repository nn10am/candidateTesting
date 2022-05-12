
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CreateTest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listIdQuestionMC: [],
            listIdQuestion: [],
            listIdQuestionESS: []

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
        let res = await axios.get('http://localhost:5000/multi-choice')
        this.setState({
            listIdQuestionMC: res && res.data ? res.data : []
        })
        let respon = await axios.get('http://localhost:3000/Essay')
        this.setState({
            listIdQuestionESS: respon && respon.data ? respon.data : []
        })

    }




    handleCheckbox = (id) => {
        console.log("id là:", id);
        if (this.state.listIdQuestion.includes(id)) {

            let currenListIDQuenstion = this.state.listIdQuestion;
            console.log("Đây là .... trước", currenListIDQuenstion);
            currenListIDQuenstion = currenListIDQuenstion.filter(item => item !== id);
            console.log("Đây là ....sau", currenListIDQuenstion);
            this.setState({
                listIdQuestion: currenListIDQuenstion
            })


        }
        else {
            this.setState({
                listIdQuestion: [...this.state.listIdQuestion, id]
            })

            console.log(this.state.listIdQuestion);
        }
    }
    submitHandler = () => {
        axios.post(`http://localhost:3000/test/`, {
            listIdQuestion: this.state.listIdQuestion
        });
        alert("Bạn đã tạo bộ đề thành công");
    }


    render() {
        let { listIdQuestionMC } = this.state;
        let { listIdQuestion } = this.state;
        let { listIdQuestionESS } = this.state;
        console.log("Đây là danh sáh", this.state);

        console.log("Đây là danh sáh222 hahahahha", listIdQuestionESS);

        return (
            <div className="list-user-container">


                <button className='themcauhoi' onClick={() => this.submitHandler()}>Thêm mới bộ đề</button>
                <button className='themcauhoi' ><Link className="linkCreate" to="/test-exam"><i className="fa-solid fa-circle-left"></i>Xem bộ đề </Link></button>
                <div className="list-user-content">

                </div>
                <h3 className="title">
                    Chọn các câu hỏi dưới đây để tạo bộ đề mới
                </h3>
                <div>
                    <h3>I.	BÍ QUYẾT TRỞ THÀNH NHÀ QUẢN LÝ GIỎI</h3>
                    <table id="customers">
                        <tr><th>Lựa chọn</th>
                            <th>ID</th>
                            <th>Nội dung câu hỏi</th>
                        </tr>


                        {listIdQuestionMC && listIdQuestionMC.length > 0 &&
                            listIdQuestionMC.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Bí quyết trở thành nhà quản lý giỏi") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentMC}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                        <div>Tự Luận</div>

                        {listIdQuestionESS && listIdQuestionESS.length > 0 &&
                            listIdQuestionESS.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Bí quyết trở thành nhà quản lý giỏi") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentEss}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                    </table>
                </div>
                <div>
                    <h3>II.	KỸ NĂNG QUẢN LÝ DỰ ÁN</h3>
                    <table id="customers">
                        <tr><th>Lựa chọn</th>
                            <th>ID</th>
                            <th>Nội dung câu hỏi</th>

                        </tr>


                        {listIdQuestionMC && listIdQuestionMC.length > 0 &&
                            listIdQuestionMC.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Kĩ năng quản lý dự án") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentMC}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                        <div>Tự Luận</div>

                        {listIdQuestionESS && listIdQuestionESS.length > 0 &&
                            listIdQuestionESS.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Kĩ năng quản lý dự án") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentEss}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                    </table>
                </div>
                <div>
                    <h3>III.	BÍ QUYẾT QUẢN LÝ THỜI GIAN HIỆU QUẢ</h3>
                    <table id="customers">
                        <tr><th>Lựa chọn</th>
                            <th>ID</th>
                            <th>Nội dung câu hỏi</th>


                        </tr>

                        {listIdQuestionMC && listIdQuestionMC.length > 0 &&
                            listIdQuestionMC.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Bí quyết quản lý thời gian hiệu quả") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentMC}</td>

                                        </tr>

                                    );
                                }
                            })
                        }

                        <div>Tự Luận</div>

                        {listIdQuestionESS && listIdQuestionESS.length > 0 &&
                            listIdQuestionESS.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Bí quyết quản lý thời gian hiệu quả") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentEss}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                    </table>
                </div>
                <div>
                    <h3>IV.	KỸ NĂNG HỌC TẬP HIỆU QUẢ</h3>
                    <table id="customers">
                        <tr><th>Lựa chọn</th>
                            <th>ID</th>
                            <th>Nội dung câu hỏi</th>


                        </tr>

                        {listIdQuestionMC && listIdQuestionMC.length > 0 &&
                            listIdQuestionMC.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Kĩ năng học tập hiệu quả") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentMC}</td>

                                        </tr>

                                    );
                                }
                            })
                        }

                        <div>Tự Luận</div>

                        {listIdQuestionESS && listIdQuestionESS.length > 0 &&
                            listIdQuestionESS.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Kĩ năng học tập hiệu quả") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentEss}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                    </table>
                </div>
                <div>
                    <h3>V.	BÍ QUYẾT CÂN BẰNG CUỘC SỐNG</h3>
                    <table id="customers">
                        <tr><th>Lựa chọn</th>
                            <th>ID</th>
                            <th>Nội dung câu hỏi</th>


                        </tr>

                        {listIdQuestionMC && listIdQuestionMC.length > 0 &&
                            listIdQuestionMC.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Bí quyết cân bằng cuộc sống") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentMC}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                        <div>Tự Luận</div>

                        {listIdQuestionESS && listIdQuestionESS.length > 0 &&
                            listIdQuestionESS.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Bí quyết cân bằng cuộc sống") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentEss}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                    </table>
                </div>
                <div>
                    <h3>VI.	SỬ DỤNG “TRÍ TUỆ CẢM XÚC” TRONG CÔNG VIỆC</h3>
                    <table id="customers">
                        <tr><th>Lựa chọn</th>
                            <th>ID</th>
                            <th>Nội dung câu hỏi</th>


                        </tr>

                        {listIdQuestionMC && listIdQuestionMC.length > 0 &&
                            listIdQuestionMC.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Sử dụng trí tuệ cảm xúc trong công việc") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentMC}</td>

                                        </tr>

                                    );
                                }
                            })
                        }

                        <div>Tự Luận</div>

                        {listIdQuestionESS && listIdQuestionESS.length > 0 &&
                            listIdQuestionESS.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Sử dụng trí tuệ cảm xúc trong công việc") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentEss}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                    </table>
                </div>
                <div>
                    <h3>VII.	KỸ NĂNG TRÌNH BÀY VẤN ĐỀ RÕ RÀNG</h3>
                    <table id="customers">
                        <tr><th>Lựa chọn</th>
                            <th>ID</th>
                            <th>Nội dung câu hỏi</th>


                        </tr>

                        {listIdQuestionMC && listIdQuestionMC.length > 0 &&
                            listIdQuestionMC.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Kĩ năng trình bày vấn đề rõ ràng") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentMC}</td>

                                        </tr>

                                    );
                                }
                            })
                        }

                        <div>Tự Luận</div>

                        {listIdQuestionESS && listIdQuestionESS.length > 0 &&
                            listIdQuestionESS.map((item, index) => {
                                const key = item.id;
                                if (item.GroupID === "Kĩ năng trình bày vấn đề rõ ràng") {
                                    return (
                                        <tr className="child" key={item.id}>

                                            <td><input type="checkbox" onChange={() => this.handleCheckbox(key)} value="likes" /></td>
                                            <td>{item.id}</td>
                                            <td>{item.contentEss}</td>

                                        </tr>

                                    );
                                }
                            })
                        }
                    </table>
                </div>

            </div>
        )
    }
}
export default CreateTest;