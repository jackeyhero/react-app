import React,{Component} from 'react';

import "./book.css";
import book from "./images/book.png";



class Book extends Component{

	constructor(props) {
		super(props);
		this.state={isToggleOn:true};
		this.reverseImg= this.reverseImg.bind(this);
	}

	reverseImg(){
			this.setState(pervState => ({
				isToggleOn:!pervState.isToggleOn
			}));
		}

	render(){
		return (
			<div className="bookBox" onClick={this.reverseImg}>
				<div className="bookImg">
				<img src={book} />
				</div>
				<div className="bookName">
					{this.state.isToggleOn?'ON':'OFF'}
				</div>
			</div>
			);
	}
}


export default Book;
