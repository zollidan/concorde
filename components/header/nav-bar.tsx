import Link from 'next/link'

export const NavBar = () => {
    return (
        <nav className='flex items-center space-x-8 font-medium'>
            <Link href='/works'>Works</Link>

            <Link href='/about'>About</Link>

            <Link href='/playground'>Playground</Link>

            <Link href='/contact'>Contact</Link>
        </nav>
    )
}
