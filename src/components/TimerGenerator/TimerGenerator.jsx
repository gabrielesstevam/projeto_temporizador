// imports ------
import Timer from "../Timer/Timer" // Timer compponent
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faUserNurse } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

// JSX ------
export default function TimerGenerator(){
    const [listTimers, setlistTimers] = useState([])
    function timerGenerate(e){
        e.preventDefault()
        const elements = e.target.elements
        setlistTimers([{
            title:elements.title.value,
            time:elements.time.value
        },...listTimers])
    }
    return(
        <>
            <main 
                className="bg-blue-400 text-white m-2 p-2 max-w-130 max-h-200 rounded-xl bg-linear-to-br from-blue-600 to-blue-300 shadow-xl/20 shadow-blue-500">
                <form onSubmit={timerGenerate}
                    className="flex items-center justify-between">
                    <div 
                    className="flex flex-col gap-2">
                        <span className="bg-white text-blue-500 flex gap-5 p-1 rounded-sm w-100 border-2 border-transparent hover:border-blue-500 transition duration-500 ease-in-out">
                            <label htmlFor="ititle">Título:</label>
                            <input type="text" name="title" id="ititle" placeholder="Digite o titulo do seu timer aqui" className="w-full text-sm" required/>
                        </span>
                        <span className="bg-white text-blue-500 flex gap-5 p-1 rounded-sm w-100 border-2 border-transparent hover:border-blue-500 transition duration-500 ease-in-out">
                            <label htmlFor="itime">Tempo:</label>
                            <input type="number" name="time" id="itime" className="w-full text-sm" min={1} placeholder="Digite o tempo do seu timer aqui em segundos" required/>
                        </span>
                    </div>
                    <button type="submit" className="text-blue-400 bg- p-5 rounded-xl text-center bg-white hover:scale-105 transition duration-200 ease-in-out"><FontAwesomeIcon icon={faPlus}/></button>
                </form>
            </main>
        </>
    )
}