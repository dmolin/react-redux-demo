import React from 'react'
import {Link} from 'react-router'

export default ((props) => {
  const classes = "header-content " + (props.theme ? "theme-" + props.theme : "")
  
  function showSubHeaderIfVisible() {
    return (
      props.area ?
        <div className="header-sub">
          <div className="centered-panel">
            <Link to="/">Home</Link> >> <span>{props.area}</span>
          </div>
        </div> : ''
    )
  }


  return (
    <div className="header">
      <div className={classes}>
        <div className="centered-panel">
          <div className="logo-wrapper">
            <a href="/">
              <img className="logo-image" src="/img/je-logo-demo.png" />
            </a>
          </div>
        </div>
      </div>
      {showSubHeaderIfVisible()}
    </div>
  )
})
