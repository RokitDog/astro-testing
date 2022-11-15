import { FC, useState } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    const [count, setCount] = useState(0)

    return (
        <div className="flex space-x-5 items-center">
            <button
                className="font-bold p-2 border border-red-400 rounded"
                onClick={() => setCount(count - 1)}
            >
                Decrement
            </button>
            <span>Current Count is: {count}</span>
            <button
                className="font-bold p-2 border border-blue-400 rounded"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    )
}

export default page
