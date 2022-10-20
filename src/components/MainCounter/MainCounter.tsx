import {MouseEvent, useState} from 'react'


interface MainCounterProps {
    worktime: number
    breaktime: number
}

export default function MainCounter(props:MainCounterProps) {
    const [isCounterRunning, setIsCounterRunning] = useState(false)

    let startingDate = new Date(0,0,0,0,props.worktime.valueOf());

    function renderTime(date:Date):string {
        const minutes = date.getMinutes() >= 10 ? String(date.getMinutes()) : "0" + String(date.getMinutes())
        const seconds = date.getSeconds() >= 10 ? String(date.getSeconds()) : "0" + String(date.getSeconds());
        return `${minutes}:${seconds}`
    }

    function handleCountdown(event:MouseEvent) {
        setIsCounterRunning(!isCounterRunning)
        if (isCounterRunning) {
            const countdown = setInterval(() => {
                startingDate.setSeconds(startingDate.getSeconds() - 1)
                console.log(startingDate)
            },1000)
        }
    }

    return (
        <div className="main-counter">
            <p aria-label="main-counter">{renderTime(startingDate)}</p>
            <button onClick={handleCountdown} >Start</button>
        </div>

    )
}