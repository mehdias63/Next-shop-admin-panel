import { getCategories } from '@/services/categoryService'
import { getProducts } from '@/services/productService'
import CategorySidebar from './CategorySidebar'
import queryString from 'query-string'
import { cookies } from 'next/headers'
import { toStringCookies } from '@/utils/toStringCookies'
import { ProductsShopTitle, ProductsGrid } from './ProductsShopTitle'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

async function Products({ searchParams }) {
	const cookieStore = await cookies()
	const strCookies = toStringCookies(cookieStore)

	const productsPromise = getProducts(
		queryString.stringify(searchParams, { arrayFormat: 'comma' }),
		strCookies,
	)

	const categoryPromise = getCategories()

	const [{ products }, { categories }] = await Promise.all([
		productsPromise,
		categoryPromise,
	])

	return (
		<div className="container mx-auto px-4">
			<ProductsShopTitle />
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
				<Suspense fallback={null}>
					<CategorySidebar categories={categories} />
				</Suspense>
				<div className="lg:col-span-3">
					<ProductsGrid products={products} />
				</div>
			</div>
		</div>
	)
}

export default Products
