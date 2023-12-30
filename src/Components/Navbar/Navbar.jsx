import React, { Component } from 'react'
import "./Navbar.css"
import { NavMenuItems } from "./NavMenuItems"

class Navbar extends Component{
    state={clicked:false}
    changeHandler=()=>{
        this.setState({clicked : !this.state.clicked})
    }
    render(){
       return(
        <nav className="Navbar-items">
           <h1 className="navbar-logo">Trippy</h1>
           <div className="menu-icon" onClick={this.changeHandler}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
           </div>
           
           <ul className={this.state.clicked ? "navbar-menu active" : "navbar-menu"}>
                {NavMenuItems.map((item, index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href="/">
                                <i className={item.icon}></i>
                                {item.title}
                                
                            </a>
                        </li>

                    )
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
       )
    }
}
export default Navbar