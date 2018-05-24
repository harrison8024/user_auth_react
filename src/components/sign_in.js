import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signIn} from '../actions';
import {renderInput} from '../helpers';

class SignIn extends Component {

    handleSignIn(values){
        this.props.signIn(values);
    }

    render(){
        const {handleSubmit} = this.props;
        return (
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card grey lighten-2">
                        <div className="card-content">
                            <span className="card-title center ">Sign In</span>
                            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                <Field name="email" label="Email" component={renderInput}/>
                                <Field name="password" label="Password" component={renderInput} type="password"/>
                                <div className="row right-align">
                                    <button className="btn grey darken-4">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values){
    const {email, password}= values;
    const errors = {};
    if(!email){
        errors.email = "Please enter your email address";
    }
    if(!password){
        errors.password = "Please choose a passwrord";
    }
    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

export default connect(null, {signIn})(SignIn);