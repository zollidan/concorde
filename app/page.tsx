'use client'
import { MainCards } from '@/components/main-cards'
import { MainHeading } from '@/components/main-heading'
import { useEffect, useState } from 'react'

type Product = {
    index: number
    id: string
    title: string
    artist: string
    year: number
    style: string
    imageUrl: string
    description: string
}

export default function Home() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    const fetchCatalog = async () => {
        setLoading(true)

        const response = await fetch('/api/products?take=5')

        if (!response.ok) {
            throw new Error('Failed to fetch catalog')
        }

        const data = await response.json()

        setProducts(data)
    }

    useEffect(() => {
        setProducts([])

        fetchCatalog()
    }, [])

    return (
        <>
            <MainHeading />

            {products &&
                products.map((product, index) => (
                    <MainCards
                        key={product.index}
                        index={index}
                        image={product.imageUrl}
                        title={product.title}
                        id={product.id}
                    />
                ))}

            <div className='flex justify-center mt-10'>
                <a
                    href='/works'
                    className='text-royal-blue text-xl font-semibold underline'
                >
                    Discover more.
                </a>
            </div>
        </>
    )
}
