import {
	getOneProductBySlug,
	getProducts,
} from '@/services/productService'
import AddToCart from './AddToCart'
import ProductPriceInfo from './ProductPriceInfo'

export const dynamic = 'force-static'

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
			<ProductPriceInfo
				title={product.title}
				titleEn={product.titleEn}
				description={product.description}
				descriptionEn={product.descriptionEn}
				price={product.price}
				discount={product.discount}
				offPrice={product.offPrice}
			/>
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
