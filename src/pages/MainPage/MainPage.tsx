import {useState} from 'react'
import MainCounter from '../../components/MainCounter/MainCounter'
import TimeSelector from '../../components/TimeSelector/TimeSelector'


export default function MainPage() {
    const [worktime, setWorktime] = useState(0)
    const [breaktime, setBreaktime] = useState(0)

    return (
        <div className="main-func-cont">
            <TimeSelector worktime={worktime} breaktime={breaktime} setWorktime={setWorktime} setBreaktime={setBreaktime}/>
            <MainCounter worktime={worktime} breaktime={breaktime} />
        </div>
        )
}