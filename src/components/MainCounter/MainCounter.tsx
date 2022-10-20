import {MouseEvent, useState, useEffect} from 'react'


interface MainCounterProps {
    worktime: number
    breaktime: number
}

export default function MainCounter(props:MainCounterProps) {
    const [isCounterRunning, setIsCounterRunning] = useState(false)
    const [counterDate, setCounterDate] = useState(new Date(0,0,0,0,props.worktime))
    // let startingDate = new Date(0,0,0,0,props.worktime.valueOf());
    useEffect(() => {
        setCounterDate(new Date(0,0,0,0,props.worktime))
    }, [props.worktime])
    

    function renderTime(date:Date):string {
        const minutes = counterDate.getMinutes() >= 10 ? String(counterDate.getMinutes()) : "0" + String(counterDate.getMinutes())
        const seconds = counterDate.getSeconds() >= 10 ? String(counterDate.getSeconds()) : "0" + String(counterDate.getSeconds());
        return `${minutes}:${seconds}`
    }

    function handleCountdown(event:MouseEvent) {
        setIsCounterRunning(!isCounterRunning)
        // eslint-disable-next-lin
        const counter:NodeJS.Timer | null = isCounterRunning 
        ? setInterval(()=> {
            let newDate = counterDate;
            newDate.setSeconds(newDate.getSeconds() - 1)
            setCounterDate(newDate)
            console.log(counterDate)
        },1000)
        : null
    }

    return (
        <div className="main-counter">
            <p aria-label="main-counter">{renderTime(counterDate)}</p>
            <button onClick={handleCountdown} >Start</button>
            <button onClick={() => setCounterDate(new Date(1994,12,19,19,19))}>Test state</button>
        </div>

    )
}