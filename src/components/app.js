import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretDoc from './secret_doc';
import OperativeList from './operative_list';
import auth from '../hoc/auth';
import SignUp from './sign-up';
import SignIn from './sign_in';
import MovieQuote from './movie_quote';
import redirect from '../hoc/redirect';


const App = () => (
    <div>
       <Nav/>
       <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/secret-doc" component={auth(SecretDoc)}/>
            <Route path="/operative-list" component={auth(OperativeList)}/>
            <Route path="/sign-up" component={redirect(SignUp,'/movie-quote')}/>
            <Route path="/sign-in" component={redirect(SignIn,'/movie-quote')}/>
            <Route path="/movie-quote" component={MovieQuote}/>
       </div>   
    </div>  
);

export default App;
