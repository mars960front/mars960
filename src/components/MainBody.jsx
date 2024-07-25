import React from 'react'
import Sidebar from './Sidebar'
import Outlets from './Outlets'

const MainBody = () => {
    return (
        <div className='h-[90%] flex gap-5 '>
            <Sidebar />
            <Outlets />
        </div>
    )
}

export default MainBody