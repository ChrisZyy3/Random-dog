import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import fetch from "fetch";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list:[]
        }
    }

    componentDidMount() {
        var  api='https://random.dog/woof.json';
        axios.get(api)
            .then((response) =>{
                // handle success
                console.log(response.data.url);
                this.setState({
                    list:response.data.url
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }


    getData=()=>{
        var  api='https://random.dog/woof.json';
        axios.get(api)
            .then((response) =>{
                // handle success
                console.log(response.data.url);
                this.setState({
                    list:response.data.url
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                {/*<h2>random dog</h2>*/}
                <button onClick={this.getData}>click to get new set</button>
                <div id={'grid'}>
                    <img src={this.state.list}/>
                </div>

                {/*<ul>*/}
                {/*    {*/}
                {/*        this.state.list.map((value,key)=>{*/}
                {/*            return<li  key={key}>{value.title}</li>*/}

                {/*        })*/}
                {/*    }*/}
                {/*</ul>*/}
            </div>
        )
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
