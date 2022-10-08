import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import './App.css'
import randonLocation from "./utilis/randonLocation"
import Mundos from './componentes/Mundos'
import Info from './componentes/Info'
import Sugeren from './componentes/Sugeren'
import ErrorPantalla from './componentes/ErrorPantalla'


function App() {
   const [mundos, setMundos] = useState()
   const [buscador, setBuscador] = useState()
   const [filteres, setfilteres] = useState(undefined)
   const [errorPantalla, seterrorPantalla] = useState(false)

   useEffect(() => {
      let id = randonLocation()
      if (buscador) {
         id = buscador
      }
      const URL = `https://rickandmortyapi.com/api/location/${id}`
      axios.get(URL)
         .then(res => {
            seterrorPantalla(false)
            setMundos(res.data)

         })
         .catch(err => seterrorPantalla(err))
   }, [buscador])

   const handleButon = event => {
      event.preventDefault()
      setBuscador(event.target.locationId.value)
   }
   const filterchange = event => {
      if (event.target.value === "") {
         setfilteres()
      } else {
         const URL = `https://rickandmortyapi.com/api/location/?name=${event.target.value}`
         axios.get(URL)
            .then(res => setfilteres(res.data.results))
            .catch(err => console.log(err))
      }
   }
   return (
      <div className='App'>
         <div className='img-gif'>

         </div>
         <form onSubmit={handleButon}>
            <input type="text" id='locationId' onChange={filterchange} />
            <button>serch</button>
         </form>
         <Sugeren filteres={filteres} setBuscador={setBuscador} />
         <div className='cuerpo'>
            {
               errorPantalla ?
                  <ErrorPantalla /> :
                  <div>
                     <Info mundos={mundos} />
                     <div className='super'>
                        {
                           mundos?.residents.map(url => (
                              <Mundos key={url} url={url} />
                           ))
                        }
                     </div>

                  </div>
            }
         </div>

      </div>
   )

}

export default App
