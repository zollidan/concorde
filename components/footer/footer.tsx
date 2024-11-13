import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className=' mb-14'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-royal-blue text-[21px]'>
                        Out Of The Blue. LeFort ⏤ 2024
                    </p>
                </div>
                <div className='flex space-x-8'>
                    <Link href='' className='text-main-black text-[21px]'>
                        Artstation
                    </Link>
                    <Link href='' className='text-main-black text-[21px]'>
                        Linkedin
                    </Link>
                    <Link href='' className='text-main-black text-[21px]'>
                        Twitter
                    </Link>
                </div>
            </div>
        </footer>
    )
}
