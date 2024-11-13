'use client'

import { useState, useTransition } from 'react'

export default function Playground() {
    const [inputValue, setInputValue] = useState('')
    const [error, setError] = useState('')
    const [messages, setMessages] = useState<string[]>([])
    const [isPending, startTransition] = useTransition()

    const handleSubmit = () => {
        setMessages((prevMessages) => [...prevMessages, inputValue])

        startTransition(async () => {
            try {
                const response = await fetch(`/api/vienna?promt=${inputValue}`)
                const data = await response.json()

                const message = data.result.alternatives[0].message.text

                setMessages((prevMessages) => [...prevMessages, message])

                setInputValue('')
            } catch (error) {
                console.error('Error fetching data:', error)
                setError('An error occurred while fetching data.')
            }
        })
    }

    return (
        <div className='flex justify-center'>
            <div className=' w-1/2 my-4'>
                <div className='my-4'>
                    {messages &&
                        messages.map((messages, index) => (
                            <div key={index} className='space-y-4'>
                                {index % 2 === 0 ? (
                                    <div className='flex justify-end w-full'>
                                        <p className='p-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm max-w-1/2 my-2 text-end'>
                                            {messages}
                                        </p>
                                    </div>
                                ) : (
                                    <div className='flex w-full'>
                                        <p className='p-2  bg-white border border-slate-300 rounded-md text-sm shadow-sm max-w-1/2 my-2 text-start'>
                                            {messages}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>

                <div className='w-full'>
                    <div className='flex'>
                        <input
                            type='text'
                            className='block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-royal-blue focus:ring-1 focus:ring-royal-blue
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      '
                            placeholder='Start your chat'
                            id='inputField'
                            disabled={isPending}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            autoComplete='off'
                        />
                        <button
                            type='submit'
                            className='block ml-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none hover:text-main-white hover:bg-royal-blue ease-in-out duration-100'
                            onClick={handleSubmit}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
