import React from 'react';
import HomePage from './components/home/HomePage';
import About from './components/about/About';
import SignUp from './components/signup/SignUp';
import ContactUs from './components/contact/ContactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/contact'>
                        <ContactUs />
                    </Route>
                    <Route path='/signup'>
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
