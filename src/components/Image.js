import React, {useState} from 'react'
import car from "./car.jpeg"
// import "./Image.css"

function Image() {
    const [newHeight, setNewHeight] = useState (200)
    const [newWidth, setNewWidth] = useState (150)

    function heightChange (event) { 
        setNewHeight(parseInt(event.target.value))
       
        
    }
    function widthChange (event){
        setNewWidth(parseInt(event.target.value))
    }

    
  return (
    <div>
        <header>
        <label>Height</label>
        <input type = "range" onChange={heightChange} value={newHeight} min="100" max="500"></input>
        
        <label>Width</label>
        <input 
        value={newWidth}
        min="100"
        max="500"
        type = "range" 
        onChange = {widthChange}></input>
        </header>
      
        <img id = "image" src = {car} alt='Lamborghini Urus'style={{
            height: `${newHeight}px`,
            width: `${newWidth}px`,
        }}></img>
    </div>
  )
}

export default Image