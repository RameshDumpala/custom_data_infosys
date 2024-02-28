import React, { useEffect, useState } from 'react'
import Year from '../YearComponent/Year'
import YearData from "../YearData.json"
import Quartel from "../QuarterComponent/Quartel"
import Week from "../WeekComponent/Week"
import "./Common.css"

const Common = () => {

    const [data,SetData]=useState(YearData)
    const [list,setList]=useState(YearData.quarter_data)
    const [weekData,setWeekData]=useState(data.week)
    const [popup,setPopup]=useState(false)
    const [year,setYear]=useState(true)
    const [quarterly,setQuarterly]=useState(false)
    const [weekley,setWeekley]=useState(false)


    

    const handlepopup=()=>{
        setPopup(true)
    }
    const handle_x =()=>{
        setPopup(false)
    }
    const hendleyear=()=>{
        setYear(true)
        setQuarterly(false)
        setWeekley(false)
    }

    const hendlequarterl=()=>{
        setQuarterly(true)
        setWeekley(false)
        setYear(false)
      }
      const hendleweekly=()=>{
        setWeekley(true)
        setQuarterly(false)
        setYear(false)
      }
 
      useEffect(()=>{
        let arr=data.year.map((item)=>"FY"+item.slice(2))
     SetData(arr)
      },[])

  return (
    <div>
        <button className='popup' onClick={handlepopup}>Open Popup</button>
       {popup ?
       <div className='dialogcontainer'>
       <div className='box'>
       <div className='buttons_div'>
     <span className='btn_x' onClick={handle_x}>x</span>
     <h2>< span  onClick={hendleyear} >{year && !quarterly && !weekley ?<span className='Year_color'>Year</span>:<span className="Year">Year</span> } </ span>{year &&  !quarterly && !weekley ?<hr className='hr_color' /> :<hr/>} </h2>
     <h2>< span  onClick={hendlequarterl} >{!year && quarterly && !weekley ?<span className='Quarterly_color'>Quarterly</span>:<span className='Quarterly'>Quarterly</span> } </ span>{!year && quarterly && !weekley ?<hr className='hr_color' /> :<hr/>} </h2>
     <h2>< span  onClick={hendleweekly} > {!year && !quarterly && weekley ?<span className='Quarterly_color' >Weekley</span>:<span className='Quarterly'>Weekley</span> }  </ span>{ !year && !quarterly && weekley ?<hr className='hr_color' /> :<hr/>} </h2>
    </div>
      
       {year && <Year data={data} handle_x={handle_x} /> }
       {quarterly && <Quartel  list={list}handle_x={handle_x} /> }
       {weekley && <Week weekData={weekData} />}
    
       </div>
       </div>:"" }

    </div>
  )
}

export default Common