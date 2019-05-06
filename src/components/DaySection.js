import React from 'react';

function DaySection(props) {
    const { dayNumber, day, min, max } = props;
    return (
        <div className={`day day--${dayNumber}`}>
            <h2 className="date">{day}</h2>
            <p className="temp">Tempratures:</p>
            <p className="min">Low: {min}°</p>  
            <p className="max">High: {max}°</p>  
        </div>
    );
}

export default DaySection;