// IMPORTS ------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faClose, faPause, faRotateLeft } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
// COMPONENT ------
export default function Timer({index, setListTimers, title, resumedTime, secondsParameter}){
    const [running, setRunning] = useState(false)
    const [timer, setTimer] = useState(secondsParameter)
    const buttonClass = "bg-white text-blue-500 py-4 px-3 rounded-xl hover:scale-104 transition duration-300 active:scale-140 hover:bg-blue-100"

    const hour = Math.floor(timer / 3600).toString().padStart(2, "0")
    const minutes = Math.floor((timer % 3600) / 60).toString().padStart(2, "0")
    const seconds = Math.floor((timer % 3600) % 60).toString().padStart(2, "0")
    let timerText = running === "acabou" ? "Finalizado!" : `${hour}:${minutes}:${seconds}` 
    let timerFunctions = useRef(undefined)

    function ButtonRunning(){
        if (running == true){
            return <button className={buttonClass} onClick={PauseTimer}><FontAwesomeIcon icon={faPause} /></button>
        } else if (running == false){
            return <button className={buttonClass} onClick={PlayTimer}><FontAwesomeIcon icon={faPlay}/></button>   
        } else {
            return <button className={buttonClass} onClick={ResetTimer}><FontAwesomeIcon icon={faRotateLeft} /></button>
        }
    }
    function PlayTimer(){
        setRunning(true)
        timerFunctions.current = setInterval(() => {
            console.log("Rodando")
            setTimer((e) => e - 1)
        }, 1000)

    }
    function PauseTimer(){
        setRunning(false)
        clearInterval(timerFunctions.current)
    }
    function ResetTimer(){
        setTimer(secondsParameter)
        setRunning(false)
    }
    function DeleteTimer(){
        setListTimers((e) => e.filter(timer => e.indexOf(timer) != index))
        clearInterval(timerFunctions.current)
    }
    useEffect(() => {
        if (timer < 0){
            setRunning("acabou")
            clearInterval(timerFunctions.current)
        }
    },[timer])

    return(
        <div className="bg-linear-to-tr from-blue-400 to-blue-800 mx-5 rounded-xl p-2 text-white flex justify-between shadow-xl/30 shadow-blue-500 gap-3 hover:scale-95 transition duration-200">
            <div className="flex flex-col gap-2 justify-between min-w-[80%]">
                <span className="flex flex-col gap-2">
                    <p className="bg-linear-to-r from-[#ffffff41] shadow-2xl/30 shadow-white p-2 rounded-lg text-white truncate h-full">{title}</p>
                    <small className="bg-linear-to-r from-[#ffffff41] shadow-2xl/30 shadow-white p-2 rounded-lg w-max text-white">({resumedTime})</small>
                </span>
                <p className="p-1 text-lg bg-white text-blue-500 text-center rounded-lg shadow-lg/40 shadow-white">{timerText}</p>
            </div>
            <div className="flex flex-col justify-between gap-3 p-1 max-w-[20%]">
                <button onClick={DeleteTimer} className={buttonClass}><FontAwesomeIcon icon={faClose}/></button>
                {
                    ButtonRunning()
                }
            </div>
        </div>
    )
}