


export default function LogisticsDashboardSection(){


    return(<div className="bg-gray-300 h-full flex flex-col content-evenly gap-8 rounded-xl">
        <div className="flex justify-between p-2 mx-4">
            <div>
            <h1 className="text-2xl font-semibold text-blue-600">Dashboard</h1>
            </div>
            <div >
            </div>
        </div>
        <div className="flex mx-4 gap-6">
            <div className="bg-blue-500 h-32 w-60 rounded"> </div>
            <div className="bg-blue-500 h-32 w-60 rounded"> </div>
        </div>

        <div className="mx-4 grid grid-cols-6 gap-4 ">
            <div className="col-span-4 bg-gray-500 h-48 rounded"></div>
            <div className="col-span-2 bg-gray-500 h-48 rounded"></div>
        </div>

        <div className="mx-4 bg-blue-600 h-60 w-4/5  rounded">

        </div>

           </div>
        )
}