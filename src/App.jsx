// IMPORTS ------
import TimerGenerator from "./components/TimerGenerator/TimerGenerator";
import Timer from "./components/Timer/Timer"
import { useState } from "react";
import { AnimatePresence } from "motion/react"
// COMPONENT ------
export default function App() {
  const [listTimers, setListTimers] = useState([])
  const [numId, setNumId] = useState(1) 

  return (
    <>
      <TimerGenerator setListTimers={setListTimers} setNumId={setNumId} numId={numId}/>
      <div className="flex flex-col-reverse gap-5 md:flex-row md:flex-wrap md:justify-center">
        <AnimatePresence>
        {
          listTimers.map((timer, index) => 
            < Timer key={timer.id} index={index} id={timer.id} setListTimers={setListTimers} title={timer.title} resumedTime={timer.resumedTime} secondsParameter={timer.seconds}/>
          )
        }
        </AnimatePresence>
      </div>
    </>
  )
}

