export default function CardFooter({ children }) {
    return (
        <div className="p-6 flex flex-col justify-between text-center">
            <button className="bg-pink-100 hover:bg-pink-200 font-bold py-2 px-4 border">
                Add to cart
            </button>
            <a href="#" className="inline-block align-baseline font-bold hover:text-black-800 mt-4 underline">
                Learn more
            </a>
        </div>
    )
}