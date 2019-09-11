import React from 'react'

const Main=(props)=>{
    return(

            <li>
                <span>{props.name}</span>
                
            <ul className='sub'>
            {props.children}
            </ul>
            </li>
        
    )
}

export default Main