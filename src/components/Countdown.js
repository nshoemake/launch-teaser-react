import React from "react";
import { useCountdown } from "../hooks/useCountdown";
import { DateTimeDisplay } from "./DateTimeDisplay";

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Launch Link</span>
        </div>
    )
}

const ShowCounter = ({days, hours, minutes, seconds}) => {
    return (
        <div className="m-auto inline-grid grid-cols-4 gap-4">
            <DateTimeDisplay 
                value={days} 
                type={'Days'}
                isDanger={days <= 3}
            />
            <DateTimeDisplay 
                value={hours} 
                type={'hours'}
                isDanger={hours <= 3}
            />
            <DateTimeDisplay 
                value={minutes} 
                type={'minutes'}
                isDanger={minutes <= 3}
            />
            <DateTimeDisplay 
                value={seconds} 
                type={'seconds'}
                isDanger={seconds <= 3}
            />
        </div>
    )
}

export const CountdownTimer = ({targetDate}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />
    }
    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    )
}