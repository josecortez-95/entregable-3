import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

import './App.css'
import Card from './componentes/Card'


function App() {
const [mundos, setMundos] = useState()
const [buscador, setBuscador] = useState(" ")

useEffect(()=>{
  let randonMundo
if(buscador === " "){
   randonMundo= Math.floor( Math.random() *(126+1) -1)
}else{
  randonMundo=buscador
}
  const url= `https://rickandmortyapi.com/api/location/${randonMundo}`
    axios.get(url)
    .then(err =>setMundos(err.data)) 

},[buscador])

const buscarMundos= e => {
     e.preventDefault()
    setBuscador(e.target.serch.value)
}


  return (
    <div className="App">
      <header>
      <div className='fondo-heder'>
      </div>
         <div className='datos'>
          <h3 className='nombre-menu'>Nombre:</h3>
            <p> {mundos?.name}  </p>
          <h3 className='nombre-menu'>Tipo:  </h3>
            <p> {mundos?.type} </p> 
          <h3 className='nombre-menu'>Dimension:  </h3>
            <p> {mundos?.dimension} </p>
            
          <h3 className='nombre-menu'>Poblacion: </h3>
            <p> {mundos?.residents.length} </p> 
         </div>
      </header>
    
      <form onSubmit={buscarMundos}>
        <input id='serch' type="number" />
        <button>Serch</button>
      </form>
     
    {
      mundos?.residents.map(url =>(
      <Card
       key={url}
       url={url}
      />
      ))
    }
    </div>
  )
}

export default App
