import React from 'react'

const Personaje = (props) => {
  return (
    <div className='card'>
        <div className='imageCont'>
            <img src={props.image} alt="" />
        </div>
        <div className='content'>
            <h2>{props.name}</h2>

            <div>
                <span className='status_icon'></span>
                <span>{props.status} - {props.species}</span>
            </div>

            <div>
                <h4>Last known location:</h4>
                <h3>{props.location}</h3>
            </div>

        </div>
    </div>
  )
}

export default Personaje
