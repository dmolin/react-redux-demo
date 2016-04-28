import React from 'react'

const Layout = (props) => {
  const {route} = props
  const path = props.location.pathname.replace('/', '-', 'g')

  return (
    <div className={`main-wrapper route` + path}>
      <div className="main-container">
        {props.children}
      </div>
    </div>
  )
};

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

export default Layout;
