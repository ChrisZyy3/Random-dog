import React from 'react'
import Dog from './dog'
import './test.css';

class Test extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           imgList : []
       }
    //    this.getImage = this.getImage.bind(this)
    }

    // getImage(num) {
    //     for (let i = 0; i < num; i ++) {
    //         fetch("https://random.dog/woof.json", {
    //             mode: 'cors'
    //         })
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             imgList: [...this.state.imgList, data.url]
    //         }))
    //     }
    // }
    // componentDidUpdate() {
    //     console.log(this.state.imgList)
    // }

    // componentDidMount() {
    //     this.getImage(8)
    //     console.log(this.state.imgList)
    // }
    
    render() {
        return (

            <div class="container" >
                {
                [...Array(8)].map((i) => <Dog key={i}/>)
            }
            </div>
        )
    }
}

export default Test