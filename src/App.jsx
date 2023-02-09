import { useState } from 'react'
import './App.css'
import CardsSection from './sections/CardsSection'
const initialProducts = [
  {
    id: 1,
    title: 'Tourmaline & Eucalyptus Bar Soap',
    description: 'Recharge your skin with the super energizing power of	finely crushed tourmaline powder blended with natural complexion',
    price: '12.00',
    image: '/img/card-top.jpg',
    imageAlt: 'Sunset in the mountains',
    quantity: 1,
  },
  {
    id: 2,
    title: 'Tourmaline & Argan Oil Bar Soap',
    description: 'Recharge your skin with the super energizing power of	finely crushed tourmaline powder blended with natural complexion',
    price: '12.00',
    image: '/img/card-top.jpg',
    imageAlt: 'Sunset in the mountains',
    quantity: 1,
  },
  {
    id: 3,
    title: 'Tourmaline & Tea Tree Bar Soap',
    description: 'Recharge your skin with the super energizing power of	finely crushed tourmaline powder blended with natural complexion',
    price: '12.00',
    image: '/img/card-top.jpg',
    imageAlt: 'Sunset in the mountains',
    quantity: 1,
  },
  {
    id: 4,
    title: 'Tourmaline Unscented Bar Soap',
    description: 'Recharge your skin with the super energizing power of	finely crushed tourmaline powder blended with natural complexion',
    price: '12.00',
    image: '/img/card-top.jpg',
    imageAlt: 'Sunset in the mountains',
    quantity: 1,
  },
  {
    id: 5,
    title: 'Tourmaline & Argan Oil Bar Soap 2',
    description: 'Recharge your skin with the super energizing power of	finely crushed tourmaline powder blended with natural complexion',
    price: '12.00',
    image: '/img/card-top.jpg',
    imageAlt: 'Sunset in the mountains',
    quantity: 1,
  },
  {
    id: 6,
    title: 'Tourmaline & Tea Tree Bar Soap 2',
    description: 'Recharge your skin with the super energizing power of	finely crushed tourmaline powder blended with natural complexion',
    price: '12.00',
    image: '/img/card-top.jpg',
    imageAlt: 'Sunset in the mountains',
    quantity: 1,
  },
  {
    id: 7,
    title: 'Tourmaline Unscented Bar Soap 2',
    description: 'Recharge your skin with the super energizing power of	finely crushed tourmaline powder blended with natural complexion',
    price: '12.00',
    image: '/img/card-top.jpg',
    imageAlt: 'Sunset in the mountains',
    quantity: 1,
  }
]
function App() {
  const productState = useState(initialProducts)
  const [products] = productState
  return (
    <>
      <div className="container mx-auto max-w-7xl px-6">
        <CardsSection productState={productState} />
        <div className="flex justify-center sm:justify-end mt-6">
          <div className="flex flex-col sm:fixed bottom-0 mb-6 rounded-md px-4 py-2 border text-center bg-white">
            <span className="text-gray-700 font-bold">Cantidad Total</span>
            <span className="text-gray-700 font-bold">
              {products.reduce((acc, product) => acc + parseInt(product.quantity), 0)}
            </span>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
