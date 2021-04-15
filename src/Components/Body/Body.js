import React from 'react';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { Route, Redirect } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
        </div>
    );
}

export default Body;