import { useRef, useState } from "react"
import Pencil from "../icons/pencil"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
//const titleFontSizeClasses = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
export default function CardBody({ product, changeQuantity, changeTitle, globalTitleFontSize }) {
    const { title, description, price, quantity } = product

    const [active, setActive] = useState(false)
    const [previousTitle, setPreviousTitle] = useState(title)
    const textAreaRef = useRef(null)
    return (
        <div className="mt-6">
            <div className={`font-bold mb-2 relative`} onClick={() => {
                setActive(!active)
                textAreaRef.current.focus()

            }}>
                <span className={classNames(
                    `cursor-pointer hover:opacity-50 transition-opacity d- duration-300 ease-in-out text-${globalTitleFontSize}`,
                    active ? "text-transparent" : "block"
                )}>
                    <Pencil className="float-left mt-2 mr-1" />
                    {title}
                </span>
                <div
                    className={classNames(
                        "absolute font-bold text-xl border rounded w-full text-left top-0 transition-opacity duration-300 ease-in-out flex",
                        active ? "block" : "hidden"
                    )}
                >
                    {/*
                    <div 
                    className="flex flex-col absolute"
                    style={{left: "-63px", top: "-4px"}}
                    onClick={(e) => e.stopPropagation()}
                    >
                        <label htmlFor="titleFontSize" className="text-sm font-medium text-gray-700">Title Size</label>
                        <select
                            id="titleFontSize"
                            name="titleFontSize"
                            className="mt-1 block w-full py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={titleFontSize}
                            onChange={(e) => setTitleFontSize(e.target.value)}
                        >
                            <option value="">Global</option>
                            {titleFontSizeClasses.map((size) => (
                                <option key={size} value={size}>{size}</option>
                            ))}
                        </select>
                    </div>
                    */}
                    <textarea
                        ref={textAreaRef}
                        onClick={(e) => e.stopPropagation()}
                        name="title"
                        value={title}
                        onChange={(e) => changeTitle({
                            id: product.id,
                            title: e.target.value
                        })}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault()
                                setActive(false)
                                setPreviousTitle(title)
                            } else if (e.key === "Escape") {
                                e.preventDefault()
                                setActive(false)
                                changeTitle({
                                    id: product.id,
                                    title: previousTitle
                                })
                            }
                        }}

                        className={`font-bold text-${globalTitleFontSize} border rounded w-full text-left`}
                    />
                    <button
                        className="bg-pink-100 hover:bg-pink-200 text-sm py-4 px-4 rounded absolute"
                        style={{ right: "-52px", top: "3px" }}
                        onClick={() => {
                            setActive(false)
                            setPreviousTitle(title)
                        }}
                    >
                        Ok
                    </button>
                </div>

            </div>


            <div className="flex items-center mt-6">
                <div className="font-bold text-xl">
                    <p>${price}</p>
                </div>
                <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => changeQuantity({
                        id: product.id,
                        quantity: e.target.value
                    })}
                    className="border rounded w-16 text-center ml-2"
                />
            </div>
            <p className="text-gray-500 text-sm mt-4">
                {description}
            </p>
        </div>
    )
}