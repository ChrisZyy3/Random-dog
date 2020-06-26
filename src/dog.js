import React from 'react'

class Dog extends React.Component {
    constructor(props) {
       super(props)
       this.state = {
           url: ""
       }
    }

    componentDidMount() {
        fetch("https://random.dog/woof.json", {
                mode: 'cors'
            })
            .then(response => response.json())
            .then(data => this.setState({
                url: data.url
            }))
    }
    
    render() {
        return (
            <img src={this.state.url} />
        )
    }
}

export default Dog