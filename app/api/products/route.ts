import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams
        const take = searchParams.get('take')

        if (take) {
            const products = await db.products.findMany({ take: Number(take) })

            return NextResponse.json(products, { status: 200 })
        }

        const products = await db.products.findMany()

        return NextResponse.json(products, { status: 200 })
    } catch (error) {
        console.error(error)

        return NextResponse.json('Internal server error', { status: 500 })
    }
}
