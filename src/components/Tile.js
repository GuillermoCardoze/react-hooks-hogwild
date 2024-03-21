import React, { useState } from 'react'


function Tile({ name, specialty, greased, weight, hightestMedal, image }){
    const [isclicked, setIsClicked] = useState(false)

    function handleClick (e) {
        setIsClicked(!isclicked)
    }

    return(

    <div onClick = {handleClick}>
        <div>{name}</div>
        <div>{isclicked ? specialty : null}</div>
        <div>{isclicked ? "greased" : null}</div>
        <div>{isclicked ? weight : null}</div>
        <div>{isclicked ? hightestMedal : null}</div>
        <img src = {image} alt = {name}/>
    </div>

    )

    
}

export default Tile



