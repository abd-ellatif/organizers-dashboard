



export default function OrganizersSection(){
    


    return(
        <div  className="bg-gray-300 h-full flex flex-col content-evenly gap-8 rounded-xl">
            <div className="flex justify-between p-2 mx-4">
            <div>
            <h1 className="text-2xl font-semibold text-blue-600">Organizers</h1>
            </div>
            <div >
            <button className="bg-blue-600 text-white rounded-xl p-1 text-sm font-semibold px-6 mx-2">New Organizer</button>
            <button className="bg-blue-600 text-white rounded-xl p-1 text-sm font-semibold px-6 mx-2">New Task</button>
            </div>
        </div>

        </div>
    );
}