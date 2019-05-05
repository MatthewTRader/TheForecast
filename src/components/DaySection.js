import React from 'react';

function DaySection(props) {
    const { dayNumber, day, min, max } = props;
    return (
        <div className={`day day--${dayNumber}`}>
            <h2 className="date">Date: {day}</h2>
            <p className="min">min: {min}</p>  
            <p className="max">max: {max}</p>  
            <p className="weather">Weather: {weather}</p>  
        </div>
    );
}

export default DaySection;