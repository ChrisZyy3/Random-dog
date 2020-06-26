import React  from 'react';
import axios from 'axios'
class App2 extends React.Component {
    //构造函数
    constructor() {
        super();
        //react定义数据
        this.state = {
            list:[]
        }
    }
    //请求接口的方法
    getData=()=>{
        const api='https://random.dog/woof.json';
        axios.get(api)
            .then((response) =>{
                // handle success
                console.log(response.data.result);
                //用到this需要注意指向，箭头函数
                this.setState({
                    list:response.data.result
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <h2>axios获取数据</h2>
                <button onClick={this.getData}>获取api接口</button>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return<li  key={key}>{value.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default App2;