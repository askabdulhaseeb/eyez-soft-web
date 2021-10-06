import React from 'react';
import HomeScreen from './HomeScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ContactHeader from './ContactForm/Header/ContactHeader';
import NavBar from './Navbar';
import store from '../redux/store';

function Routing(props) {
    
    const state = store.getState().contact;
    return (
        <Router>
            {console.log("State Data :- ",state)}
            <NavBar state={props.state} isContact={state.isContact} />
            <div>
                <Switch>
                    <Route path="/contact">
                        <ContactHeader state={props.state} />
                    </Route>
                    <Route path="/">
                        <HomeScreen state={props.state} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default Routing;