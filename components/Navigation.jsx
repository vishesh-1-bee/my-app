import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='flex justify-between mx-9 p-4'>
        <div className='flex'>
        <h1>mobile logo</h1>     
             
        </div>
     <div className=' flex text-orange-200 gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/clientcomponent'>clientcomponent</Link>
        <Link href='/servercomponent'>servercomponent</Link>
        <Link href='/service'>Service</Link>
     </div>
    </div>
  )
}

export default Navigation
