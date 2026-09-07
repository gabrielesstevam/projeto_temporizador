// IMPORTS ------
import TimerGenerator from "./components/TimerGenerator/TimerGenerator";
import Timer from "./components/Timer/Timer"
import { useState } from "react";
// COMPONENT ------
export default function App() {
  const [listTimers, setListTimers] = useState([])

  return (
    <>
      <TimerGenerator setListTimers={setListTimers}/>
      <div className="flex flex-col-reverse gap-5">

        {
          listTimers.map((timer, index) => 
            < Timer key={index} title={timer.title} resumedTime={timer.resumedTime} secondsParameter={timer.seconds}/>
          )
        }

        {/* < Timer title="Tarefa" resumedTime="12:12:12" secondsParameter={3600}/> */}
        {/* < Timer title="Tarefa" resumedTime="12:12:12" secondsParameter={301}/> */}
      </div>
      
    </>
  )
}

