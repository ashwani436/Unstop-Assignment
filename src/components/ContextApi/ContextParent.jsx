import React, { useState } from 'react'
import { MyContext } from './MyContext';
import Counter from './Counter';

function ContextParent() {

    const [text, setText] = useState('');
  return (
      <div>
        <MyContext.Provider value={{ text, setText }}>
        <Counter />
        </MyContext.Provider>
    </div>
  )
}

export default ContextParent