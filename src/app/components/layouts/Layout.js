import React from 'react'

const Layout = (props) => {
  const path = props.location.pathname === '/' ? '-root' : props.location.pathname.replace('/', '-', 'g')

  return (
    <div className={`main-wrapper route` + path}>
      <div className='main-container centered-panel'>
        {props.children}
      </div>
    </div>
  )
}

const { element, object } = React.PropTypes

Layout.propTypes = {
  location: object,
  children: element.isRequired
}

export default Layout
