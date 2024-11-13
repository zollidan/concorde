'use client'
import { MainCards } from '@/components/main-cards'
import { useEffect, useState } from 'react'

type Product = {
    index: number
    imageUrl: string
}

export default function About() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)

    const fetchCatalog = async () => {
        setLoading(true)

        const response = await fetch('/api/products?take=5')

        if (!response.ok) {
            throw new Error('Failed to fetch catalog')
        }

        const data: Product[] = await response.json()

        setProducts(data)
    }

    useEffect(() => {
        setProducts([])

        fetchCatalog()
    }, [])

    return (
        <>
            {products &&
                products.map((product, index) => (
                    <MainCards
                        key={product.index}
                        index={index}
                        image={product.imageUrl}
                    />
                ))}
        </>
    )
}
