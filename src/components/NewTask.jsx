


export default function NewTask(){
    return(
        <div className="absolute top-1/3 left-1/3 mx-4 bg-blue-100 h-96 w-6/12 rounded-xl flex flex-col justify-evenly">
            <div className="flex justify-between mx-4">
            <h2 className="text-red-600 text-sm font-semibold ">Add a new task</h2>
            <button className="bg-blue-600 text-white rounded-xl p-1 text-sm font-semibold  w-20 text-center">Add</button>
            </div>
            <div className="grid grid-cols-2">
                <form className="grid-span-1 grid grid-cols-1 gap-4 mx-4">
                  <h1>Task details</h1>  
                  <input type="text" name="taskName" placeholder="task name" className="rounded text-sm p-1"></input>
                  <input type="text" name="taskLocation" placeholder="task location" className="rounded text-sm p-1"></input>
                  <input type="text" name="statrtingTime" placeholder="starting time" className="rounded text-sm p-1"></input>
                  <input type="text" name="finishingTime" placeholder="finishing time" className="rounded text-sm p-1"></input>
                  <select name="team" id="team" className="">
                  <option value="">Restauration(ex)</option>
                  <option value="">Logistiques(ex)</option>
                  </select>
                  <select name="members" placeholder="select members"></select>

                </form>
                <div>
                    <h1>Task description</h1>
                    <textarea className="bg-gray-300 w-80 my-4 rounded text-sm font-medium p-3 " placeholder="New Task"></textarea>
                </div>

            </div>
        </div>
    );
}