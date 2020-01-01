import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter } from 'react-router-dom'
import Projects from "./Projects"
import About from "./About"
import Jobs from "./Cv"
import { Switch, Route } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

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
      <Footer />
    </ >
  )
};
  
ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>
), document.getElementById('app'));

