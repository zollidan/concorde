import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const promt = searchParams.get('promt')

    const IAMTOKEN = process.env.IAM_TOKEN

    const body = {
        modelUri: 'gpt://b1gfbq0s592h687lc2q4/yandexgpt/rc',
        completionOptions: {
            stream: false,
            temperature: 0.6,
            maxTokens: '2000',
        },
        messages: [
            // {
            //     role: 'system',
            //     text: 'Ты ассистент на сайте, тебя зовут Виенна.',
            // },
            {
                role: 'user',
                text: promt,
            },
        ],
    }

    const response = await fetch(
        'https://llm.api.cloud.yandex.net/foundationModels/v1/completion',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${IAMTOKEN}`,
            },
            body: JSON.stringify(body),
        }
    )

    if (!response.ok) {
        throw new Error(`Failed to send request: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json(data, { status: 200 })
}
