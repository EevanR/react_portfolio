import React from 'react'
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

  let scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer>
      <div className="ui container">
        <button className="ui circular icon button" onClick={() => scrollToTop()}>
          <i aria-hidden="true" className="arrow up icon"></i>
        </button>
      </div>
    </footer>
  )
}

export default Footer