import React from 'react'

const HigherOrder = (props) => { 
  return (
    <>
      <props.comp color={'red'} />
      <props.comp color={'green'} />
    </>
  )
}

  
export default HigherOrder;