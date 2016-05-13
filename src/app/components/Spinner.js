import React from 'react'

export default ((props) => {
  console.log("rendering Spinner")
  return (
    <div className="loading-spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  )
})
