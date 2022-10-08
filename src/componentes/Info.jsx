import React from 'react'
import { useEffect } from 'react'

const Info = ({mundos}) => {
 
  return (
    <div>
        <article>
            <h2>{mundos?.name}</h2>
            <ul>
                <li>Dimencion {mundos?.dimension}</li>
                <li>Tipo {mundos?.type}</li>
                <li>Habitantes {mundos?.residents.length}</li>
            </ul>
        </article>

    </div>
  )
}

export default Info