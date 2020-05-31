import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home'
import Navbar from '../navbar/Navbar';
import About from './About'
import Contact from './Contact'
import Tourlist from './Tourlist'
//import './Main.scss'

class Main extends Component {
    render() {
        return (
           <BrowserRouter>
            <div>
                <Navbar></Navbar>
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/about"  component={About}/>
                  <Route path="/contact"  component={Contact}/>
                  <Route path="/tourlist"  component={Tourlist}/>
              </Switch>

            </div>
           </BrowserRouter>
        );
    }
}

export default Main;