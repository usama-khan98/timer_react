import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            countTime: this.props.startCount,
            color:'red',
            fontSize:'3rem'
        };
    }

    componentDidMount() {
        // store the timer id to use later to get rid of it
        this.timerID = setInterval(
            () => this.setState(prevState => ({
                countTime: prevState.countTime - 1
            })
            ), 1000);
    }

    componentWillUnmount() {
        // the time won't be displayed so clear it
        clearInterval(this.timerID);
    }

    // return the state value
    render() {
        if (this.state.countTime > 0) {
            return <h2>Time remaining: {this.state.countTime} seconds.</h2>;
        } else {
            // the time won't be displayed so clear it
            clearInterval(this.timerID);
            return <h2 style={{color: this.state.color,fontSize: this.state.fontSize}}>Time up!!</h2>;
        }
    }
}

ReactDOM.render(
    <div>
        <Timer startCount={10} />
        <Timer startCount={30} />
        <Timer startCount={60} />
    </div>,
    document.getElementById('root')
);