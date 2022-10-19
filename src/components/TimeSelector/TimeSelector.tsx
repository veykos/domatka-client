import React, { ChangeEvent, } from "react"
import './TimeSelector.css'

interface TimeSelectorProps {
    worktime:number;
    setWorktime: React.Dispatch<React.SetStateAction<number>>
    breaktime: number
    setBreaktime: React.Dispatch<React.SetStateAction<number>>
}

export default function TimeSelector(props:TimeSelectorProps) {


    const handleWorktime = (event:ChangeEvent):void => {
        const target = event.target as HTMLInputElement;
        props.setWorktime(parseInt(target.value))
    }
    const handleBreaktime = (event:ChangeEvent):void => {
        const target = event.target as HTMLInputElement;
        props.setBreaktime(parseInt(target.value))
    }

    return (
        <form >
            <label htmlFor="worktime">How long we will work? :</label>
            <input name="worktime" id="worktime" type="number" min={10} max={60} onChange={handleWorktime} />
            <label htmlFor="breaktime">How long we will rest?</label>
            <input name="breaktime" id="breaktime" type="number" onChange={handleBreaktime} />
        </form>
    )
}