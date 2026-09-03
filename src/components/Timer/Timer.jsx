import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay} from "@fortawesome/free-solid-svg-icons"

export default function Timer({title, time}){

    return(
        <div className="mt-3 p-2 rounded-xl bg-linear-to-br from-blue-600 to-blue-300 text-white flex justify-between w-80 shadow-xl/20 shadow-blue-500">
            <div className="flex flex-col gap-2 w-full mx-2"> 
                <p>{title}<span className="font-medium text-sm mx-2">{time}</span></p>
                <p className="bg-white text-blue-500 text-center rounded-lg border-1 border-blue-300">20</p>
            </div>
            <button className="p-2 text-blue-400 bg-white rounded-xl hover:scale-110 transition duration-200"><FontAwesomeIcon icon={faPlay}/></button>
        </div>
    )
}