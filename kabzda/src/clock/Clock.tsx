import {useEffect, useState} from "react";

type PropsType = {

}

const digitsString = (num: number) => num < 10 ? '0'+ num : num

export const Clock:React.FC<PropsType> = (props) => {
    let [date, setDate] = useState(new Date())

    useEffect(()=>{
        const interval = setInterval(()=>{
            setDate(new Date())
        })
        return clearInterval(interval)
    },[])


    return (
        <div>
            <span>{digitsString(date.getHours())}</span>
            :
            <span>{digitsString(date.getMinutes())}</span>
            :
            <span>{digitsString(date.getSeconds())}</span>
        </div>
    )
}