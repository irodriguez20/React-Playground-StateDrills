import React from 'react';


export default class Bomb extends React.Component{
 state = {
       count: 0
    }


    componentDidMount () {
        this.interval = setInterval(() => this.setState({
            count: this.state.count + 1
        })
        , 1000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }


    renderDisplay () {
        console.log('render')

        const { count } = this.state
        if (count >= 8) {
            return 'BOOM!!!!'
        } else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
        
    }

    render () {
        return (
            <div className='CountdownBomb'>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

