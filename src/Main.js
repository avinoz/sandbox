import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import ex1 from "./ex1";
import ex2 from "./ex2";
import ex3 from "./ex3";
import ex4 from "./ex4";
import ex5 from "./ex5";
import ex6 from "./ex6";
import ex7 from "./ex7";
import ex8 from "./ex8";
// import ex9 from "./ex9";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div class="everything-cont">
          <ul className="header">
            <li id="title"><NavLink to="/">Experiments by Alvin</NavLink></li>
            <li><NavLink to="/ex1">ex1</NavLink></li>
            <li><NavLink to="/ex2">ex2</NavLink></li>
            <li><NavLink to="/ex3">ex3</NavLink></li>
            <li><NavLink to="/ex4">ex4</NavLink></li>
            <li><NavLink to="/ex5">ex5</NavLink></li>
            <li><NavLink to="/ex6">ex6</NavLink></li>
            <li><NavLink to="/ex7">ex7</NavLink></li>
            <li><NavLink to="/ex8">ex8</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/ex1" component={ex1}/>
            <Route path="/ex2" component={ex2}/>
            <Route path="/ex3" component={ex3}/>
            <Route path="/ex4" component={ex4}/>
            <Route path="/ex5" component={ex5}/>
            <Route path="/ex6" component={ex6}/>
            <Route path="/ex7" component={ex7}/>
            <Route path="/ex8" component={ex8}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;