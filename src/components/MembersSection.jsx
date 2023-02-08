


export default function MembersSection(){




    return(<div className="bg-gray-300 h-[600px] flex flex-col content-evenly gap-8 rounded-xl">

        <div className="flex justify-between p-2 mx-4">
            <div>
            <h1 className="text-2xl font-semibold text-blue-600">Members</h1>
            </div>
            <div >
            <button className="bg-blue-600 text-white rounded-2xl p-1 text-sm font-semibold px-6 mx-2">Add member</button>
            </div>
        </div>

        <div className="flex mx-4 gap-6">
            <div className="bg-blue-500 h-20 w-48 rounded"> </div>
            <div className="bg-blue-500 h-20 w-48 rounded"> </div>
        </div>

        <div className="mx-4 bg-white h-96 w-4/5  rounded">

        </div>


           </div>)
}