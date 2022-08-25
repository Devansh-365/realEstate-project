import React from 'react';
import Navbar from './Navbar';


const Layout = ({children}) => {
    
    return (
        <div className=''>
            {/* <div className='w-[108rem] flex-none flex justify-end absolute'>
                    <img src='https://tailwindcss.com/_next/static/media/docs@30.beeb08605f12f699c5abc3814763b65e.avif' />
            </div> */}
            <Navbar />
            <div className=' md:w-11/12 md:max-w-6xl mx-4 md:mx-auto mt-12 md:mt-28'>
                {children}
            </div>
        </div>
    )
}
export default Layout;