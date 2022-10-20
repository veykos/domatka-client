import {MouseEvent, useEffect} from 'react'


interface MainCounterProps {
    worktime: number
    breaktime: number
}

export default function MainCounter(props:MainCounterProps) {
    let startingDate = new Date(0,0,0,0,props.worktime);

    // useEffect(() => {
    //   date.setMinutes(props.worktime)
    //   date.setSeconds(60)
    //   }
    // , [props.worktime])
    
    
    function renderTime(date:Date):string {
        const minutes = date.getMinutes() >= 10 ? String(date.getMinutes()) : "0" + String(date.getMinutes())
        const seconds = date.getSeconds() >= 10 ? String(date.getSeconds()) : "0" + String(date.getSeconds());
        return `${minutes}:${seconds}`

    }


    function startCountdown(event: MouseEvent) {
        date = new Date();
        date.setMinutes(props.worktime)

    }
    return (
        <div className="main-counter">
            <p aria-label="main-counter">{renderTime(startingDate)}</p>
            <button onClick={startCountdown}>Start</button>
        </div>

    )
}