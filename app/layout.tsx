'use client'
import './globals.css'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { GoogleTagManager } from '@next/third-parties/google'
import { DM_Sans } from 'next/font/google'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en'>
            <GoogleTagManager gtmId='GTM-PZMWTGDL' />
            <body
                className={`${dm_sans.className} mx-40 min-h-screen flex flex-col justify-between`}
            >
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
