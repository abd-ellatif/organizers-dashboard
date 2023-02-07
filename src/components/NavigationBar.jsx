import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
export default function NavigationBar(props){

    const [menu,setMenu] = useState(false);


    return(
        <div className="h-20 w-screen flex flex-row justify-between px-10">

            <div className=" grid grid-cols-3 p-4 items-center">
            <img src={'/'+props.type+'.png'} width="200" height="20" ></img>
            <input type="search" className="rounded-3xl bg-gray-200 h-10 px-4" placeholder=" search" onChange={props.handleSearchChange}></input>
            <button className="bg-gray-200 rounded-3xl mx-1 h-10 w-[40px]" onClick={props.handleSearch}>  <FontAwesomeIcon  icon={faMagnifyingGlass} /> </button>
           
            </div>

            <div className="static flex flex-row items-center gap-4">

                <h2>Zakaria</h2>
                <img src="/person.png" className="rounded-3xl w-10 h-10"></img>
                <button> <FontAwesomeIcon icon={faBell}/></button>
                <button onClick={()=>{setMenu(!menu)}}> <FontAwesomeIcon icon={faEllipsisVertical}/></button>
                {menu?<div className="absolute top-20 right-10  bg-gray-400 grid grid-cols-1 rounded gap-2 text-sm font-medium text-gray-800 p-3">
                    <button> See profile</button>
                    <button className="text-red-800"> Log out</button>
                    
                    
                      </div> : null}
            
            </div>
           
        </div>
    );
}