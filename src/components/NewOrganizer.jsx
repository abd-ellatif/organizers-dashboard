import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export default function NewOrganizer (){


    return(
        <div className="absolute top-1/3 left-1/3 mx-4 bg-white h-60 w-96 rounded flex flex-col justify-evenly ">
            <h2 className="text-red-600 text-sm font-semibold mx-4">Add a new organizer</h2>
            <div className="mx-2">
            <input type="search" className="mx-2 rounded-3xl bg-gray-200 h-10 px-4 w-1/2 text-sm" placeholder=" search member"></input>
            <select name="team" id="team" className="">
            <option value="">Restauration(ex)</option>
            <option value="">Logistiques(ex)</option>
             </select>
            </div>
            <div className="justify-end">
            <button className="bg-blue-600 text-white rounded-xl p-1 text-sm font-semibold px-6 mx-2 w-20 text-center mx-60">Add</button>
            </div>
           
            

        </div>
    );
}