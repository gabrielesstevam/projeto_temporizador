// IMPORTS ------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faClose, faPause } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
// COMPONENT ------
export default function Timer({title, resumedTime, seconds}){
    const [running, setRunning] = useState(false)
    const [timer, setTimer] = useState(resumedTime)
    const buttonClass = "bg-white text-blue-500 py-3 px-3 rounded-xl hover:scale-104 transition duration-300 active:scale-140 hover:bg-blue-100"

    // use state de timer ja será em segundos, o tratamento ocorrerá na própria tag, e quando ele rodar vai mudar o state e automaticamente vai mudar na conversão

    // dar commit a cada funcionalidade

    function ButtonRunning(){
        if (running){
            return <button className={buttonClass}><FontAwesomeIcon icon={faPause} /></button>
        } else {
            return <button className={buttonClass}><FontAwesomeIcon icon={faPlay} /></button>   
        }
    }

    return(
        <div className="bg-linear-to-tr from-blue-400 to-blue-800 mx-5 rounded-xl p-3 text-white flex justify-between shadow-xl/30 shadow-blue-500 gap-3 hover:scale-95 transition duration-200">
            <div className="flex flex-col w-full gap-2 justify-between">
                <span className="flex items-end">
                    <p className="text-2xl">{title}</p>
                    <small className="text-white p-1 rounded-sm">({resumedTime})</small>
                </span>
                <p className="p-1 text-lg bg-white text-blue-700 text-center rounded-lg shadow-lg/40 shadow-white">12:00:00</p>
            </div>
            <div className="flex flex-col justify-between gap-3">
                <button className={buttonClass}><FontAwesomeIcon icon={faClose}/></button>
                {
                    ButtonRunning()
                }
            </div>
        </div>
    )
}