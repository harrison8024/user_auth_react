import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeAuth} from '../actions';

class Nav extends Component{
    renderLinks(){
        
            const {auth, changeAuth} = this.props;
            
            if(auth){
            return(
                <Fragment>
                    <li>
                        <Link to="/secret-doc">Secret Docs</Link>
                    </li>
                    <li>
                        <Link to="/operative-list">Operative List</Link>
                    </li>
                    <li>
                    <button className="btn red" onClick={()=> changeAuth(false)}>Sign Out</button>
                    </li>
                </Fragment>
            )}
            return (
            <li>
                <button className="btn" onClick={()=> changeAuth(true)}>Sign In</button>
            </li>
            )
        
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <Link style={{marginLeft: '10px'}} to="/" className="brand-logo left">CIA</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        {this.renderLinks()}
                        
                    </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(state){
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps,{changeAuth})(Nav);