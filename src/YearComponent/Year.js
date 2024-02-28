import React, { useState } from 'react'
import "./Year.css"

const Year = ({data,handle_x}) => {
const[yearItems,setYearItem]=useState([])
const[isActive,setIsActive]=useState(false)

const handleitem=(item)=>{
    setIsActive(true)
    let arr1=[...yearItems]
    if(yearItems.length<3 && yearItems===yearItems ){
    arr1.push(item)
    setYearItem(arr1)
    }
}
const handlex=()=>{
    setYearItem([])
    setIsActive(false)
}

  return (
    <div className='main_container'>
         <h4 disabled={yearItems.length===3} className='years-up-to-3'>Select up to 3 Consecutive Years  ({yearItems.length}/3)</h4>
          {isActive?
         <div className='select_items'>
           {yearItems.sort().map((item)=>(
              <span disabled={yearItems.length === 3} className='year_map_items'>
                    {item}
              </span>
          ))}
             <span className='cancle_x'onClick={handlex} >X</span>
         </div>:<span className='empty'></span>}
      
        <span className='map_container'>
         <span className='year'>Year</span>
             {data.map((item)=>(
                <div className='map_items' onClick={()=>handleitem(item)}>
                      {item}
                </div>
                    ))}
        </span>
       
    <span className='buttons_span'>
        <span className='btn_cancle'><span onClick={handle_x} >Cancle</span></span>
        <span className='btn_apply'> <span >Apply</span></span>
    </span>
    </div>
  )
}

export default Year