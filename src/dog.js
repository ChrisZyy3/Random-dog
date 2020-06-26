import React from 'react'

function GetExtension(filename) {
    return filename.split('.').pop();
}

class Dog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: "",
            index:"",
            extension:""
        }
    }



    componentDidMount() {
        fetch("https://random.dog/woof.json", {
            mode: 'cors'
        })
            .then(response => response.json())
            .then(data =>
                this.setState({
                    url: data.url,
                    index: this.state.url.lastIndexOf("."),
                    extension: this.state.index.substr(this.state.index+1)
                }))
    }
    // function (isMp4) {
    //     if (this.state.extend ="mp4")
    //         return <mp4 className="img-responsive" src={this.state.url}/>
    //     else
    //         return <img className="img-responsive" src={this.state.url}/>
    // }


    render() {
        const ext = GetExtension(this.state.url)
        console.log("url is " + this.state.url)
        console.log("index is " + this.state.index)
        console.log("extension is " + ext)
        if (ext == "mp4") {
            return (
                <div class="dog">
                    <video controls autoPlay class="img-responsive" src={this.state.url}/>
                    {/*<isMp4 />*/}
                </div>
            )
        }
        else {
            return (
                <div class="dog">
                    <img class="img-responsive" src={this.state.url}/>
                    {/*<isMp4 />*/}
                </div>
            )
        }
    }
}

export default Dog