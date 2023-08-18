import React,{useState} from 'react'

const  Child = (props) => {
    const [text, setText] = useState(0);
    return (
      <>
        <p style={{backgroundColor:props.color}}>{text}</p>
        <button onClick={() => setText(text + 1)}>Increment</button>
      </>
    )
}

export default Child;