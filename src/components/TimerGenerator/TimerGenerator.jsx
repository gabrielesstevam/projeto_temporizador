// IMPORTS ------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useRef } from "react";
// COMPONENT ------
export default function TimerGenerator({ setListTimers }) {
    const regex = /^\d{2}:\d{2}:\d{2}$/
    const inputTitle = useRef()
    let inputTimer = useRef()

    function newTimer() {
        const title = inputTitle.current.value
        let time = inputTimer.current.value
        if (title === "" || time === "") {
            window.alert("Determine o titulo e tempo do temporizador.")
        } else {
            if (regex.test(time)) {
                const timeSeparateString = time.split(":")
                let timeSeparate = []

                timeSeparateString.forEach((i) => {
                    timeSeparate.push(parseInt(i))
                })

                let count = 1
                let correct = true

                for (const i of timeSeparate) {
                    if (count == 2 || count == 3) {
                        correct = i < 60 ? true : false
                        if (!correct) {
                            break
                        }
                    }
                    count++
                    // window.alert(`${count}${correct}${i}`)
                }

                if (!correct) {
                    window.alert("Determine o tempo do temporizador de acordo com os limites {99:60:60}")
                } else {
                    let seconds = (timeSeparate[0] * 3600) + (timeSeparate[1] * 60) + (timeSeparate[2])

                    setListTimers((e) => [...e, {
                        title: title,
                        resumedTime: time,
                        seconds: seconds
                    }])
                    
                    inputTimer.current.value = ""
                    inputTitle.current.value = ""
                }
            } else {
                window.alert("Informe o tempo no formato correto {00:00:00}.")
                inputTimer.current.value = ""
            }
        }
    }

    return (
        <div className="text-sm p-3 bg-linear-to-tr from-blue-400 to-blue-800 m-auto w-[90%] my-4 rounded-xl shadow-2xl/50 shadow-blue-500 flex gap-3 flex-col">
            <input className="text-center text-blue-700 rounded-sm bg-white p-2.5 shadow-white shadow-xl/12" type="text" name="title" id="ititle" ref={inputTitle} placeholder="Digite o título do seu temporizador" required />
            <input className="text-center text-blue-700 rounded-sm bg-white p-2.5 shadow-white shadow-xl/12 num " type="text" name="title" id="ititle" ref={inputTimer} placeholder="Determine o tempo no formato {00:00:00}" required />
            <button className="button text-blue-700 bg-white p-3 rounded-lg shadow-white shadow-xl/12 hover:scale-103 transition duration-500 hover:bg-blue-100 active:scale-140" onClick={newTimer}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    )
}