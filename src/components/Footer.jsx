import React from 'react'
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

  let scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer>
      <div className="ui container">
        <button onClick={() => scrollToTop()}>Back to top!</button>
      </div>
    </footer>
  )
}

export default Footer