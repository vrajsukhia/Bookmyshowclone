import React from 'react'
import {BiMenu,BiSearchAlt2,BiChevronDown} from 'react-icons/bi'

function Ns() {
    return <>
    <div className='text-while flex items-center justify-between'>
        <div>
            <h3 className='text-xl font-bold text-gray-400'>Book My Show</h3>
            <spam className='text-gray-400 text-xs flex item-center cursor-pointer hover:text-white'>Gujarat</spam>
        </div>
        <div>
            <h3 className='text-gray-400' >
                Use App
            </h3>
        </div>

    </div>
    </>

}

function Nm() {
    return <>
     <div className='text-while flex items-center justify-between'>
        <div>
            <h3 className='text-xl font-bold text-gray-400 '>Book My Show</h3>
            <spam className='text-gray-400 text-xs flex item-center cursor-pointer hover:text-white'>Gujarat</spam>
        </div>
        <div className='w-8 h-8 text-gray-400'>
        < BiSearchAlt2 className='w-full h-full' />
        </div>

    </div>
    </>

}

function Nl() {
    return <>
     <div className='container flex mx-auto px-4 item-center justify-between'>
        <div className='flex items-center w-1/2 gap-3'>
              <div className='w-10 h-10'>
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="Logo" className='w-full h-full items-center' />
              </div>
              <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                <BiSearchAlt2 />
                <input type='search' placeholder='Search For Anime,Movies...'
                className='w-full bg-transparent border-none focus:outline-none' />
              </div>
        </div>
        <div className='flex items-center gap-3'>
            <spam className='text-gray-400 text-base flex items-center cursor-pointer hover:text-white'>Gujarat<BiChevronDown/></spam>
            <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Sign In</button>
            <div className='w-8 h-8 text-gray-400'>
               <BiMenu className='w-full h-full'/>
            </div>
        </div>

     </div>
        
    </>

}
const Navbra = () => {
    return (
        <nav className='bg-darkbackground-700 px-4 py-3' class="perm" >
            <div className='md:hidden'>
                <Ns />
            </div>
            <div className='hidden md:flex lg:hidden'>
                <Nm />
            </div>
            <div className='hidden md:hidden lg:flex'>
                <Nl />
            </div>
        </nav>

    )
        
};
export default Navbra