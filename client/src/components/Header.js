import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';


class Header extends React.Component{
    renderLinks(){
        if (this.props.authenticated){
            return (
                <ul className="navbar-nav float-right">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signout">Sign Out</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/feature">Feature</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav  float-right">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin">Sign in</Link>
                    </li>                
                </ul>
            ) 
        }
    }

    render(){
        return(
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <i className="fab fa-earlybirds"></i>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/feature">Link</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/feature">Other Link</Link>
                        </li>
                    </ul>
                        {this.renderLinks()}    
                </div>
            </div>
     
            // <div className="">
            //     <Link to="/">Redux Auth</Link>
            //     {this.renderLinks()}  
            // </div>
        )
    }
}

function mapStateToProps(state){
    return { authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps)(Header);