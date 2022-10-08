import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'


const Mundos = ({url}) => {
const [personajes, setpersonajes] = useState()

useEffect (()=>{
  axios.get(url)
  .then(res => setpersonajes(res.data))
  .catch (err =>console.log(err))
},[])

  return (
    <div className='cauerpo-card'>
     
      <header>
         <img src={personajes?.image} alt="" />
         <div>
          <span>{personajes?.status}</span>
         </div>

        <h3>{personajes?.name}</h3>
        <ul>
            <li>Raza {personajes?.species}</li>
            <li>Origen {personajes?.origin.name}</li>
            <li>Aparece Episodios {personajes?.episode.length}</li>
        </ul>
       </header>

    </div>
  )
}

export default Mundos