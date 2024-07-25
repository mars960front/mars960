import React from 'react'
import Navbar from '../components/Navbar'
import MainBody from '../components/MainBody'

const Home = () => {
    return (
        <div className='flex flex-col gap-5 h-[100%]'>
            <Navbar />
            <MainBody />
        </div>
    )
}

export default Home