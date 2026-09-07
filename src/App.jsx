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
          listTimers.map((timer) => 
            < Timer title={timer.title} resumedTime={timer.resumedTime} seconds={timer.seconds}/>
          )
        }

        < Timer title="Tarefa" resumedTime="12:12:12" seconds={1234124}/>
        < Timer title="Tarefa" resumedTime="12:12:12" seconds={1234124}/>
      </div>
      
    </>
  )
}

