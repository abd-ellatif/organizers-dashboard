import {Link} from 'react-router-dom'

export default function RHmenu (){


    return(
        <div className="flex flex-col justify-between h-full  p-6">
            <div>
            <h1 className="text-2xl font-medium">Menu</h1>
            <ul >
            <li className="m-4 my-8">
                <Link to='/RH/' className="active:bg-blue-400 p-2 rounded-3xl"> Dashboard </Link>
            </li>
            <li className="m-4 my-8">
               <Link to='/RH/members' className="active:bg-blue-400 p-2 rounded-3xl"> Members </Link>
            </li>
            <li className="m-4 my-8">
                <Link to='/RH/settings' className="active:bg-blue-400 p-2 rounded-3xl"> Settings </Link>
            </li>
        </ul>
            </div>
             

        <button className="m-4 my-8 bg-gray-200 text-red-600 active:bg-red-400 p-2 rounded-3xl">Log out</button>

        </div>

       
    );
}