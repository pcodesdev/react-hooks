import React from 'react'

function Footer() {
    return (
        <div className='text-center p-5 bg-dark shadow-lg mb-2'>
            <p className='text-white'>Copyright &copy; {new Date().getFullYear()} all rights reserved.</p>
        </div>
    )
}

export default Footer