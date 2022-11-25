import React from 'react'
import {useState} from 'react'

const Car = () => {
    const motherBox = {
        display : 'flex' ,
        magin : 'auto' ,
        flexDirection : "column",
        width : "100%",
        height : "1000px",
    }

    const imgBox = {
        width : "80%",
        height: "600px" ,
        boderRadius: "30px",
        border : "1px solid black",
        backgroundImage: 'url(./car1.jpg)'
    }

    const imgStyle = {
        objectFit:'cover',
    }
    const NextCar = () => {
        
    }
    return (
        <div style={motherBox}>
            <div style={imgBox}>
                <img src="./car1.jpg" alt="" style={imgStyle}/>
            </div>
            <button style={{display:"block" , width : "150px" , height : "50px"}} onClick = {NextCar}>Next</button>
        </div>
    )
}

export default Car