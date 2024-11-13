'use client'

import { MoveDown } from 'lucide-react'
import Image from 'next/image'

export function MainHeading() {
    return (
        <div>
            <div className='flex justify-between h-[calc(60vh-60px)] items-center mx-3 '>
                <div className='mr-32'>
                    <h1 className='text-[60px] font-medium text-main-black'>
                        Hello, I’m Mehmet Akif.
                    </h1>
                </div>
                <div className='flex items-end h-full mb-44'>
                    <h2 className='text-[32px] font-normal text-main-gray'>
                        A senior-year design student who trying to specialize in
                        3D modeling & texturing.
                    </h2>
                </div>
            </div>
            <div className='mt-24'>
                <MoveDown className='size-10' />
            </div>
        </div>
    )
}
