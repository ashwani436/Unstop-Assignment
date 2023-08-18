import React, { memo } from 'react'

function RerenderingChild() {

    console.log("Re-rendered");
  return (
    <div>RerenderingChild</div>
  )
}

export default memo(RerenderingChild);