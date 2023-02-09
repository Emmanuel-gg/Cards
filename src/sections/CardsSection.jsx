import React, { useState } from "react"
import Card from "../components/Card"
import CardBody from "../components/CardBody"
import CardFooter from "../components/CardFooter"
import CardHeader from "../components/CardHeader"

const titleFontSizeClasses = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']
export default function CardsSection({ productState }) {

	const [globalTitleFontSize, setGlobalTitleFontSize] = useState('xl')

	const [products, setProducts] = productState

	const changeProperty = ({ id, property, value }) => {
		const newProducts = products.map((p) => {
			if (p.id === id) {
				return {
					...p,
					[property]: value
				}
			}
			return p
		})
		setProducts(newProducts)
	}

	const changeQuantity = ({ id, quantity }) => {
		changeProperty({ id, property: 'quantity', value: quantity })
	}

	const changeTitle = ({ id, title }) => {
		changeProperty({ id, property: 'title', value: title })
	}
	return (<>
		<div
			className="flex flex-col"
			onClick={(e) => e.stopPropagation()}
		>
			<label htmlFor="titleFontSize" className="text-sm font-medium text-gray-700">Title Size</label>
			<select
				id="titleFontSize"
				name="titleFontSize"
				className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				value={globalTitleFontSize}
				onChange={(e) => setGlobalTitleFontSize(e.target.value)}
			>
				{titleFontSizeClasses.map((size) => (
					<option key={size} value={size}>{size}</option>
				))}
			</select>
		</div>
		<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
			{products.map((product, index) => (
				<Card key={product.id}>
					<CardHeader src={product.image} alt={product.imageAlt} />
					<CardBody
						product={product}
						changeQuantity={changeQuantity}
						changeTitle={changeTitle}
						globalTitleFontSize={globalTitleFontSize}
					/>
					<CardFooter />
				</Card>
			))}
		</section>

	</>)
}
