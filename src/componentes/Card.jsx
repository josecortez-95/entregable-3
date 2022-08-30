import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Card = ({ url }) => {
    const [residentes, setResidentes] = useState()
    useEffect(() => {
        const urlResidentes = url
        axios.get(urlResidentes)
            .then(res => setResidentes(res.data))
    }, [])

    return (
        <div className='card-padre'>
            <div className='card'>
                <img src={residentes?.image} alt="" />
                <h2> {residentes?.name}</h2>
                <h3>Raza </h3>
                   <span>{residentes?.species} </span> 
                <h3>Origen </h3>
                    <span> {residentes?.origin.name} </span>
                <h3>Aparicion en episodios </h3>
                   <span>{residentes?.episode.length}  </span> 
            </div>

        </div>
    )
}

export default Card