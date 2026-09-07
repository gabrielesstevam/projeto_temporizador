// IMPORTS ------
import TimerGenerator from "./components/TimerGenerator/TimerGenerator";
import Timer from "./components/Timer/Timer"
import { useState } from "react";
// COMPONENT ------
export default function App() {
  const [listTimers, setListTimers] = useState([])
  const [numId, setNumId] = useState(1) 

  return (
    <>
      <TimerGenerator setListTimers={setListTimers} setNumId={setNumId} numId={numId}/>
      <div className="flex flex-col-reverse gap-5">

        {
          listTimers.map((timer, index) => 
            < Timer key={timer.id} index={index} setListTimers={setListTimers} title={timer.title} resumedTime={timer.resumedTime} secondsParameter={timer.seconds}/>
          )
        }
      </div>
      
    </>
  )
}

