

export default function SeetingsPanel(){



    return(
    <div className="bg-gray-300 h-full flex flex-col content-evenly gap-8 rounded-xl">
            <h1 className="text-2xl font-semibold text-blue-600 mx-4">
                Settings 
            </h1>  
            <h1 className="grid-span-2 text-xl font-semibold text-blue-600 mx-8">
                Profile 
            </h1> 
            <div className="mx-8 grid grid-cols-2">
            
            <form className="grid-span-1 flex flex-col w-96">
                <input type="text" placeholder="first name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="text" placeholder="last name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="text" placeholder="E-mail" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="password" placeholder="Current password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="password" placeholder="New password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
            </form>

            <div className="grid-span-1 text-center">
            <img src="/image.png" height="200" width="200"></img>
            <label for="image" className='cursor-pointer  text-[#160042] underline '>upload</label>
            <input type='file' multiple required name='image' id="image" accept='image/*' style={{visibility:'hidden'}}  />  
            </div>

            <div className="flex flex-row-reverse my-10 w-[720px]">
                <button className="bg-orange-400 rounded p-1"> update</button>
            </div>
            </div>
    </div>);
}