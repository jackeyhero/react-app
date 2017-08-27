import React,{ Component } from 'react';

import './clock.css';


class Clock extends Component {
    constructor(props){
        super(props);
        this.state = { date:new Date() };
    }

    componentDidMount() {
        console.log(this.props.value);
        if (this.props.value){
            this.timerID = setInterval(
                ()=> this.tick(),
                1000
            );
        }
        return false;
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }



    render(){
        return (
            <div className="clockBox">
                { this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}


export default Clock;
