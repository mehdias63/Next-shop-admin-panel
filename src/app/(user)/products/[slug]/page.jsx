import {
	getOneProductBySlug,
	getProducts,
} from '@/services/productService'
import AddToCart from './AddToCart'
import {
	toPersianNumbers,
	toPersianNumbersWithComma,
} from '@/utils/toPersianNumbers'

export const dynamic = 'force-static'
export const dynamicParams = false

const mockProducts = [
	{
		slug: 'demo-product-1',
		title: 'محصول نمونه ۱',
		description: 'توضیحات نمونه محصول ۱',
		price: 100000,
		discount: 10,
		offPrice: 90000,
	},
	{
		slug: 'demo-product-2',
		title: 'محصول نمونه ۲',
		description: 'توضیحات نمونه محصول ۲',
		price: 200000,
		discount: 0,
		offPrice: 0,
	},
]

async function page({ params }) {
	const { slug } = params
	let product

	try {
		const response = await getOneProductBySlug(slug)
		product = response.product
	} catch (err) {
		product =
			mockProducts.find(p => p.slug === slug) || mockProducts[0]
	}

	return (
		<div>
			<h1 className="font-bold text-2xl mb-6">{product.title}</h1>
			<p className="mb-6">{product.description}</p>
			<p className="mb-6">
				قیمت محصول :{' '}
				<span
					className={`${product.discount ? 'line-through' : 'font-bold'}`}
				>
					{toPersianNumbersWithComma(product.price)}
				</span>
			</p>
			{!!product.discount && (
				<div className="flex items-center gap-x-2 mb-6">
					<p className="text-xl font-bold">
						قیمت با تخفیف :{' '}
						{toPersianNumbersWithComma(product.offPrice)}
					</p>
					<div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
						{toPersianNumbers(product.discount)} %
					</div>
				</div>
			)}
			<AddToCart product={product} />
		</div>
	)
}

export default page

export async function generateStaticParams() {
	let productsList

	try {
		const { products } = await getProducts()
		productsList = products
	} catch (err) {
		productsList = mockProducts
	}

	return productsList.map(product => ({
		slug: product.slug,
	}))
}
