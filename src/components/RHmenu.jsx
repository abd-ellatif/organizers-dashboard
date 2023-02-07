

export default function RHmenu (){


    return(
        <div className="flex flex-col justify-between h-screen  p-6">
            <div>
            <h1 className="text-2xl font-medium">Menu</h1>
            <ul >
            <li className="m-4 my-8">
                <button className="active:bg-blue-400 p-2 rounded-3xl"> Dashboard </button>
            </li>
            <li className="m-4 my-8">
                <button className="active:bg-blue-400 p-2 rounded-3xl"> Organizers </button>
            </li>
            <li className="m-4 my-8">
               <button className="active:bg-blue-400 p-2 rounded-3xl"> Members </button>
            </li>
            <li className="m-4 my-8">
                <button className="active:bg-blue-400 p-2 rounded-3xl"> Settings </button>
            </li>
        </ul>
            </div>
             

        <button className="m-4 my-8 bg-gray-200 text-red-600 active:bg-red-400 p-2 rounded-3xl">Log out</button>

        </div>

       
    );
}