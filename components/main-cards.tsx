'use client'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

interface Product {
    id: string
    index: number
    image: string
    title: string
}

export const MainCards = ({ index, image, title, id }: Product) => {
    return (
        <div className={inter.className}>
            <div className='text-main-black mt-32 mb-32'>
                <Link href={`/product/${id}`}>
                    <div className='flex justify-between gap-x-28'>
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='font-medium text-[18px] '>
                                    {index} / {title}
                                </p>
                                <div className='mt-6 text-justify'>
                                    <p className='font-normal text-[18px]'>
                                        Goblin concept digital sculpture with
                                        human-like skin. Learned a lot of quick
                                        tips and look development.
                                    </p>
                                    <p className='font-normal text-[14px] text-main-gray mt-6'>
                                        Sculpted in ZBrush, Retopologized and
                                        UVs done in Maya, Textured in Mari,
                                        Rendered using Arnold.
                                    </p>
                                    <p className='font-normal text-[10px] text-main-gray mt-6'>
                                        Product ID: {id}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className='text-lg font-medium underline shrink-0'>
                                    More shots from this project ↗
                                </p>
                            </div>
                        </div>
                        <div>
                            <Image
                                loader={() => image}
                                src={image}
                                alt=''
                                width={650}
                                height={365}
                                className='w-[1000px]'
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <div className='bg-main-black h-[1.5px] w-full' />
        </div>
    )
}
