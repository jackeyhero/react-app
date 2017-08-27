import React,{ Component } from 'react'
import "./header.css"

class NavList extends Component {
    render(){
        return (
            <li>{ this.props.menuli }</li>
        )
    }
}
class Header extends Component{
    render(){
        let menuLi=[]
        this.props.menu.forEach((menu)=>{
            menuLi.push( <NavList menuli={menu.name} />)
        })
        return (
            <div className="header">
                <ul>
                    {menuLi}
                </ul>
            </div>
        )}
}



export default Header;
