import React, { useState } from 'react';
import { eventItems } from '../../assets/data';
import Button from "../layouts/Button";
import '../../styles/layouts/Events.css';

import HeroBackgLeft from '../../assets/patterns/pattern-curve-top-right.svg';
import PatternLines from '../../assets/patterns/pattern-lines.svg';

function Events() {

  const [eventInfo, setEventInfo] = useState(0);
  const {title, description, images} = eventItems[eventInfo];
  const {tablet, desk} = images;

  return (

    <div className="events container">

        <img src={HeroBackgLeft} alt='' className='hero-backg' />
      
        <div className='events-c'>

            <img src={PatternLines} alt='' className='pattern-lines' />

            <picture className='box-events_left'>

                <source media="(min-width:1200px)" srcSet={desk}/>

                <source media="(min-width:800px)" srcSet={tablet} />

                <img src={desk} alt={title} />

            </picture>

            <div className='box-events_right'>

                <div className="btn-container">

                    {eventItems.map((event, index) => {

                        return (

                            <button className={`${index === eventInfo && 'selected'}`}

                                key={event.id}
                                onClick={() => setEventInfo(index)}>
                                {event.title}

                            </button>

                        )} 

                    )}

                </div>

                <div className="events-info">

                    <h2>{title}</h2>

                    <p>{description}</p>

                    <Button text="Reserve uma mesa" color='btn-events'/>

                </div>   
                
                
            </div>   

        </div>      
         
    </div>
  )
}

export default Events;