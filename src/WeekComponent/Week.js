import React, { useState } from "react";
import "./Week.css";

const Week = ({ weekData }) => {
  console.log(weekData);

  return (
    <div className="week_container">
      <h4 className="years-up-to-3">
        Select up to 13 Consecutive Weeks (6/13)
      </h4>
      <div className="custom_week"></div>


      <div>
      {Object.entries(weekData).map(([year, quarters]) => (
        <div key={year} className='box_items_container'>
          <h3>{year}</h3>
          <div>
            {Object.entries(quarters).map(([quarter, weeks]) => (
              <ul key={quarter}>
                <th className='quarter_week'>{quarter}</th>
                {/* <ul>
                  {weeks.map((week) => (
                    <td key={week} className='week_key'>{week.slice(9)}</td>
                  ))}
                </ul> */}
              </ul>
            ))}
          </div>
        </div>
      ))}
      </div>
      

      {/* {Object.entries(weekData).map(([year, quarters]) => (
        <div key={year}>
          <h4 className="yearkey">{year}</h4>

          {Object.entries(quarters).map(([quarter, weeks]) => (
            <ul>
              <div className="quarterkey">
                <h4>{quarter}</h4>
              </div>

              {weeks.map((week) => (
                <span className="weekvalue">{week.slice(9)}</span>
              ))}
            </ul>
          ))}
        </div>
      ))} */}
    </div>
  );
};

export default Week;
