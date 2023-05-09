import React from 'react'

const Box = (props) =>{
        return(
            <div className='box'>
                <h1 className='text'>Está procurando um profissional de Front-End? </h1>
                <p>{props.title}</p>
            </div>
        )
     }
     


export default Box