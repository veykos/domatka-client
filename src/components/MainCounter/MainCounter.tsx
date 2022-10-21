import {MouseEvent, useState, useEffect} from 'react'


interface MainCounterProps {
    worktime: number
    breaktime: number
}


export default function MainCounter(props:MainCounterProps) {
    
    const [timerSeconds, setTimerSeconds] = useState(props.worktime * 60)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        setTimerSeconds(props.worktime * 60)
    }, [props.worktime])

    function reduceByOneSecond() {
        setTimerSeconds(prevTimerSeconds => prevTimerSeconds - 1)
        console.log(timerSeconds)
    }
    let interval;
    function handleClick() {
        interval = setInterval(reduceByOneSecond, 1000)
    }


    const minutesStr:string = timerSeconds / 60 >= 10 ? String(Math.floor(timerSeconds / 60)) : '0' + String(timerSeconds / 60)
    const secondsStr:string = timerSeconds % 60 >= 10 ? String(timerSeconds % 60) : '0' + String(timerSeconds % 60)

    return (
        <div className="main-counter">
            <span>{minutesStr}:{secondsStr}</span>

            <button onClick={handleClick} >Minus one second</button>
        </div>

    )
}