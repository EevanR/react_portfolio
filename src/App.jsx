import React from "react"
import Hello from "./components/Hello"
import Header from "./components/Header"
import { Switch, Route } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const App = () => {
  return (
    <>
      <Header />
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={300}
            classNames="fade"
          >
            <Switch location={location}>
              <Route exact path='/' component={Hello}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </ >
  )
};

export default App;