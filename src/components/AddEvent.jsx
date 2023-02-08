import React, { useState } from 'react';

export default function AddEvent() {





    return(
        <div className='bg-red-100 h-[450px] w-2/3 rounded-xl '>
            <h1 className='text-blue-500 font-semibold text-xl ml-2'>Add Event</h1>
            <div className='grid grid-cols-2 '>
                <div className='col-span-1'>
                    <form className='grid grid-cols-1 p-4'>
                        <label>Event name</label>
                        <input name='eventName' type="text" placeholder='event name' className='rounded text-sm p-1'></input>
                        <label>Event description</label>
                        <input name='eventName' type="text" placeholder='describe the event' className='rounded text-sm p-1'></input>
                        <label>Event location</label>
                        <input name='eventName' type="text" placeholder='event location' className='rounded text-sm p-1'></input>
                        <label>Event time</label>
                        <input name='eventName' type="text" placeholder='event time' className='rounded text-sm p-1'></input>
                        <label>Categories</label>
                        <input name='eventName' type="text" placeholder='categories' className='rounded text-sm p-1'></input>
                    </form>
                    <div className='grid grid-cols-1 gap-6 text-center'>
                        <button className='bg-blue-500 p-3 rounded-xl mx-10 text-white font-semibold '> Save </button>
                        <button className='border-solid border-2 border-gray-600 p-3 rounded-xl font-semibold mx-10'> Cancel </button>
                    </div>
                </div>
                <div className='col-span-1'>

                </div>
            </div>
        </div>
    );

   
   }