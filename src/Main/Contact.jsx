import React from 'react'
import { useDataFlowContext } from "../Context/DataFlow";
function Contact() {
 

 const { firstName } = useDataFlowContext();
 console.log(firstName);

const {darkMode} = useDataFlowContext();
console.log(darkMode);
    
  return (
    <div className='text-blue-800 text-4xl py-5'>Contact</div>
  )
}

export default Contact