import React from "react"
import Hello from "./components/Hello"
import Header from "./components/Header"
import Projects from "./components/Projects"
import About from "./components/About"
import Jobs from "./components/Cv"
import { Switch, Route } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { animateScroll } from "react-scroll";

const App = () => {
  return (
    <>
      <Header />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={550}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path='/' component={Hello}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/projects' component={Projects}></Route>
              <Route exact path='/cv' component={Jobs}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </ >
  )
};

export default App;