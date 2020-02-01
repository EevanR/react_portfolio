import React from 'react'

const Footer = () => {
    return (
        <footer>
          <div className="ui container">
            <p className="white">Made with React {React.version}</p>
          </div>
          <div className="footerIcons">
            <a href="https://www.linkedin.com/in/eevan-redon-579881199/" target="_blank"><i className="linkedin icon"></i></a>
            <a href="https://github.com/EevanR" target="_blank"><i className="github icon"></i></a>
          </div>
        </footer>
      )
}

export default Footer