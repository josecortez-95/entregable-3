import React from 'react'

const Sugeren = ({filteres,setBuscador}) => {
   
      const hadleList = id=>{
      setBuscador(id)
      }
  
  return (
        <ul>
           {
            filteres?.map(lista =>(
               <li onClick={ ()=>hadleList(lista.id)} key={lista.id}>{lista.name}</li>
            ))
           }
            
        </ul>
  )
}

 

export default Sugeren