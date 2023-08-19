import React from 'react'

const Operators = () => {
    const operator=['+','-','*','/'];
  return (
    <div>
      {
        operator.map((operation,key)=>(
            <button key={key}>{operation}</button>
        ))
      }
    </div>
  )
}

export default Operators
