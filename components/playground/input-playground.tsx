export const PlaygroundInput = () => {
    return (
        <div className='w-2/4'>
            <div className='flex'>
                <input
                    type='text'
                    className='border-2 px-4 py-2 border-main-black w-full'
                    placeholder='Start your chat'
                />
                <button
                    type='button'
                    className='border-2 px-4 py-2 ml-1 border-main-black hover:bg-main-gray hover:text-main-white'
                >
                    Send
                </button>
            </div>
        </div>
    )
}
