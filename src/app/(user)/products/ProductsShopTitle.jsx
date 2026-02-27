'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useSearchParams } from 'next/navigation'
import ProductCard from './ProductCard'

export function ProductsShopTitle() {
	const { t } = useLanguage()
	return (
		<h1 className="text-3xl font-extrabold mb-8 text-gray-800 border-b pb-2">
			{t('productsShop')}
		</h1>
	)
}

export function ProductsGrid({ products }) {
	const { t } = useLanguage()
	const searchParams = useSearchParams()

	let filtered = [...products]

	const categoryParam = searchParams.get('category')
	if (categoryParam) {
		const cats = categoryParam
			.split(',')
			.map(c => c.trim().toLowerCase())
			.filter(Boolean)
		if (cats.length > 0) {
			filtered = filtered.filter(p =>
				cats.includes((p.category?.titleEn || '').toLowerCase()),
			)
		}
	}

	const sort = searchParams.get('sort')
	if (sort === 'earliest') {
		filtered = filtered.sort(
			(a, b) => new Date(a.createdAt) - new Date(b.createdAt),
		)
	} else {
		filtered = filtered.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
		)
	}

	if (filtered.length === 0) {
		return <p className="text-gray-500">{t('noProductsFound')}</p>
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{filtered.map(product => (
				<ProductCard key={product._id} product={product} />
			))}
		</div>
	)
}
