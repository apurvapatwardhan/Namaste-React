import React from "react"

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy"
            }
        }
    }

    async componentDidMount() {
        const resp = await fetch(`https://api.github.com/users/ezmobius`);
        const data = await resp.json();
        console.log(data)
        this.setState({
            userInfo: data
        })
    }

    render() {
        return <>
        <h1>This is he Profile class based component</h1>
        <p>Name: {this.state?.userInfo?.login}</p>
        <p>Location: {this.state?.userInfo?.location}</p>
        <img src={this.state?.userInfo?.avatar_url}></img>
        </>
    }
}

export default ProfileClass