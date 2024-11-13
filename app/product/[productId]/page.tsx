'use client'

import { ProductPageCard } from '@/components/product-page/product-page-card'

export default function ProductPage({
    params,
}: {
    params: { productId: string }
}) {
    return (
        <>
            <ProductPageCard />
        </>
    )
}
