import { useState } from 'react'

import './App.css'



function App() {

  const numbers=['0','1','2','3','4','5','6','7','8','9'];
  const operator=['+','-','*','/','=','c'];



  const[input,setinput]=useState('');

  

  const handledigit=(e)=>{
  
     
      
      setinput(input+e.target.value);
    
  }
  const handleOp=(e)=>{
    
    const operator=e.target.value;
    if(operator==='c'){
      setinput('');
    }
    else if(operator==='='){
      console.log(eval(input));
      setinput(eval(input).toString());
    }
    else{
      setinput(input+e.target.value);
    }





    
  }




  return (
    <>
      <h1>calculator</h1>
      <div className='display'>
      {input}
      <br />
      </div>

      <br />
      <div className='main'>

   
     <div className='digits'>
      {
           numbers.map((number,key)=>(
            <button key={key} className='btns' onClick={handledigit} value={number} >{number}</button>
           )) 
        }
        </div>
      <div id='operators'>
      {
        operator.map((operation,key)=>(
            <button className='btns' key={key} value={operation} onClick={handleOp} >{operation}</button>
        ))
      }
      </div>
      </div>
    </>
  )
}

export default App
