import React, { Component } from 'react';
import DayToursData from '../data/DayTours.json';

class DayTours extends Component {
  render() {
    // const row1 = section.featuredTours.slice(0,5);
    // const row2 = section.featuredTours.slice(5,9);
    // const row3 = section.featuredTours.slice(9,13);
    return (
      <div className="day-tours">
        {DayToursData.map((section, i) =>
          <div className="tours-section">
            <h1 className="section-title">
              {section.sectionTitle + " Tours"}
            </h1>
           <img className='section-image' src={require("../img/day-tours/" + i + ".jpg")} />
           <div className='featured-tours'>
             <div className='tours-row'>
               {section.featuredTours.slice(0,4).map((tourImg, i) =>
                 <div className='tour-block'>
                   <img className='tour-image' src={require("../img/day-tours/"  + section.imgFolder + "/" + i + ".jpg")} />
                 </div>
               )}
             </div>
             <div className='tours-row'>
               {section.featuredTours.slice(4,8).map((tourImg, i) =>
                 <div className='tour-block'>
                   <img className='tour-image' src={require("../img/day-tours/"  + section.imgFolder + "/" + (i+4) + ".jpg")} />
                 </div>
               )}
             </div>

           </div>
          </div>
        )}
      </div>
    );
  }
}

export default DayTours;
