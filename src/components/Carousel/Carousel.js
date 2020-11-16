import React, { useState, useEffect } from 'react'

import './Carousel.css'

import getAthlete from './dataCarousel' // this file is simulating a noSQL database request

const Carousel = () => {

  const [ number, setNumber ] = useState(1)

  //const list expects to receive an array of objects

  const [ list, setList ] = useState(getAthlete[number-1])


  useEffect(() => {
    // Updates the array of athletes as soon as the page is loaded
    setList(getAthlete[number-1])
    
  },[number])

  const toggleNumber = (lenght, action) => {

    if(action === "next" && number === lenght){
      setNumber(1)
    }else if(action === "prev" && number === 1){
      setNumber(lenght)
    }else if(action === "next"){
      setNumber(number +1)
    }else if(action === "prev"){
      setNumber(number -1)
    }

  }

  return(
    <div className="carousel">
      <h1>Logo Ipsum<br/>transforma o esporte.</h1>
      <p>Ao longo da nossa história, apoiamos atletas e grupos esportivos de diversas modalidades.<br/>Queremos estar presentes sempre.</p>
      <ul className="listSelectItem">
        <li style = {number === 1 ? { backgroundColor :"#78be21", color: "white" } : { backgroundColor: "white", color: "#78be21" } } ><i className="fas fa-running"></i>ATLETAS</li>
        <li style = {number === 2 ? { backgroundColor :"#78be21", color: "white" } : { backgroundColor: "white", color: "#78be21" } } ><i className="fas fa-users"></i>EQUIPES</li>
        <li style = {number === 3 ? { backgroundColor :"#78be21", color: "white" } : { backgroundColor: "white", color: "#78be21" } } ><i className="fas fa-handshake"></i>PARCEIROS</li>
      </ul>
      
      <ul className="photosCarousel">
        {
          list.map(value => {
            return(
              <li key={value.value + value.id}>
                <img src={value.value} alt=""/>
                <h2>{value.name}</h2>
                <p>{value.sport}</p>
              </li>
            )
          })
        }
      </ul>
      <div className="buttonsControl">

        <button 
        className="btn prev" 
        onClick={() => {toggleNumber(3, "prev")}}>
          <i className="fas fa-angle-left"></i>
        </button>
        
        <button 
        className="btn next" 
        onClick={() => {toggleNumber(3, "next")}}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
    
  )
}
export default Carousel