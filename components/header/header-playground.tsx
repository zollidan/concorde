'use client'
import Link from 'next/link'
import { NavBar } from './nav-bar'

export const HeaderPlayground = () => {
    return (
        <header className='sticky top-0 bg-main-white'>
            <div className='flex justify-between mt-16 text-[21px] text-main-black'>
                <div>
                    <Link href='/' className='text-[40px] font-bold flex'>
                        ootb./
                        <p className='text-[#CF6A26]'>playground</p>
                    </Link>
                </div>
                <NavBar />
            </div>
        </header>
    )
}
