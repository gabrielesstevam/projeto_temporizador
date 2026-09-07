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
            < Timer key={index} index={index} setListTimers={setListTimers} title={timer.title} resumedTime={timer.resumedTime} secondsParameter={timer.seconds}/>
          )
        }
      </div>
      
    </>
  )
}

