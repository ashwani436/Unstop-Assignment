// import React, { Component } from 'react'

// export default class PreventRerendring extends Component {

//     shouldComponentUpdate() {
//         return false
//     }
//   render() {
//     return (
//       <div>PreventRerendring</div>
//     )
//   }
// }

import React, { useState } from 'react'
import RerenderingChild from './RerenderingChild';

function PreventRerendring() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
       <RerenderingChild/>
    </div>
  )
}

export default PreventRerendring;



