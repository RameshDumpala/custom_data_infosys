import React, { useState } from 'react'
import "./Quarter.css"

const Quartel = ({list,handle_x}) => {
  const [quartel,setQuartel]=useState([])
  const[isActivequa,setIsActivequa]=useState(false)
   


  const handlekeys=(subItem)=>{
    setIsActivequa(true)
  let arr3=[...quartel]
  arr3.push(subItem )
  setQuartel(arr3)
  }
  const handle_x_cancle=()=>{
    setQuartel([])
    setIsActivequa(false)
  }

 
  return (
    <div className='quartel_container'>
        <h4 className='years-up-to-3' >Select up to 12 Consecutive Quarters (1/12)</h4>
        {isActivequa?
        <div className='select_items'>
          {quartel.map((item)=>(
            <div>{item}</div>
          ))}
        <span className='cancle_x' onClick={handle_x_cancle} >X</span>
        </div>:<span className='empty'></span>}


      {Object.entries(list).map(([key,value])=>(
        <tr>
          <td className="keys" >{key}</td>
          <td >{value.map((subItem)=>(
            <span className="valuse_items"  onClick={()=>handlekeys(subItem)}  >{subItem.slice(5)}</span>
          ))}</td>
        </tr>
      ))}

    
                
    <span className='quartel_buttons'>
        <span className='btn_cancle'><span onClick={handle_x} >Cancle</span></span>
        <span className='btn_apply'> <span  >Apply</span></span>
    </span>
        
    </div>
  )
}

export default Quartel