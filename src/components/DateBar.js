import React from 'react'
import DateRangeIcon from '@material-ui/icons/DateRange';

const DateBar = () => {
    return (
        <div className="date-bar">
            <div className="live">LIVE</div>

            <div className="date-day">
                <p className="day">THU</p>
                <p className="date">28 OCT</p>
            </div>

            <div className="date-day">
                <p className="day">FRI</p>
                <p className="date">29 OCT</p>
            </div>

            <div className="date-day active">
                <p className="day">TODAY</p>
                <p className="date">30 OCT</p>
            </div>

            <div className="date-day">
                <p className="day">SUN</p>
                <p className="date">30 OCT</p>
            </div>

            <div className="date-day">
                <p className="day">MON</p>
                <p className="date">31 OCT</p>
            </div>

            <div className="date-day">
                <DateRangeIcon/>
            </div>

        </div>
    )
}

export default DateBar
