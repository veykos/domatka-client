import {useState} from 'react'
import TimeSelector from '../../components/TimeSelector/TimeSelector'

export default function MainPage() {
    const [worktime, setWorktime] = useState(0)
    const [breaktime, setBreaktime] = useState(0)

    return (
        <TimeSelector worktime={worktime} breaktime={breaktime} setWorktime={setWorktime} setBreaktime={setBreaktime}/>
    )
}