import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        console.log('constructor')
        super(props)

        this.state={
            who: 'world'
        }
    }

    handleClickWorld = () => {
        console.log('handleClickWorld')
        this.setState({
            who: 'world!'
        })
    }

    handleClickFriend = () => {
        console.log('handleClickFriend')
        this.setState({
            who: 'friend!'
        })
    }

    handleClickReact = () => {
        console.log('handleClickReact')
        this.setState({
            who: 'React!'
        })
    }

    render () {
        return (
            <div>
                <p>Hello, {this.state.who}</p>

                <button onClick={this.handleClickWorld}>World</button>
                <button onClick={this.handleClickFriend}>Friend</button>
                <button onClick={this.handleClickReact}>React</button>
            </div>
        )
    }
}

export default HelloWorld;