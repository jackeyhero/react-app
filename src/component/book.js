import React,{Component} from 'react';
import Clock from './clock/clock.js';

import "./book.css";
import book from "./images/book.png";



class Book extends Component{

	constructor(props) {
		super(props);
		this.state={isToggleOn:true};
		this.state={isToggleOff:false};
		this.reverseImg= this.reverseImg.bind(this);
        this.state = {isLoggedIn: false};
	}

	reverseImg(){
        this.setState(pervState => ({
            isToggleOn:!pervState.isToggleOn
        }));
    }
    ClickOn() {
        this.setState({isLoggedIn: true});
    }

    ClickOff() {
        this.setState({isLoggedIn: false});
    }

	render(){

        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.ClickOn} />;
        } else {
            button = <LoginButton onClick={this.ClickOff} />;
        }
		return (
			<div className="bookBox" onClick={this.reverseImg}>
                <div className="bookImg">
				    <img src={book} />
				</div>
				<div className="bookName">
					{this.state.isToggleOn?'ON':'OFF'}
                    <div>
                        <Greeting isLoggedIn={isLoggedIn} />
                        {button}
                    </div>
				</div>
			</div>
			);
	}
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default Book;
