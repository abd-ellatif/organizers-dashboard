


export default function NewMember(){


    return(
        <div className="absolute top-1/5 left-1/5  bg-blue-100 rounded w-[900px]">

<h1 className="text-2xl font-semibold text-blue-600 mx-4 my-10">
                New Member 
            </h1>  
            
            <div className="mx-4 grid grid-cols-2 ">
            
            <form className="grid-span-1 flex flex-col w-96 ">
                <input type="text" placeholder="first name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="text" placeholder="last name" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="text" placeholder="E-mail" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="password" placeholder="password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="phone" placeholder="Phone number" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="departement" placeholder="Departememnt" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
                <input type="discord" placeholder="Discord ID" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></input>
            </form>

            <div className="grid-span-1 text-center">
            <img src="/image.png" height="200" width="200"></img>
            <label for="image" className='cursor-pointer  text-[#160042] underline '>upload</label>
            <input type='file' multiple required name='image' id="image" accept='image/*' style={{visibility:'hidden'}}  />  
            </div>

            <div className="flex flex-row-reverse my-10 w-[720px]">
                <button className="bg-blue-600 rounded p-1 px-3"> Add</button>
            </div>
            </div>

        </div>
    );
}