'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import AddToCart from './[slug]/AddToCart'
import { toLocalDateStringShort } from '@/utils/toLocalDate'

function ProductCard({ product }) {
	const { lang, t, formatNumber } = useLanguage()
	const displayTitle = lang === 'en' ? (product.titleEn || product.title) : product.title

	return (
		<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col">
			<div className="h-48 bg-gray-100 flex items-center justify-center">
				<img
					src={product.image || '/image1.jfif'}
					alt={displayTitle}
					className="h-full object-contain p-4"
				/>
			</div>
			<div className="p-4 flex-1 flex flex-col justify-between">
				<div>
					<h2 className="text-lg font-bold text-gray-800 line-clamp-1">
						{displayTitle}
					</h2>
					<p className="text-sm text-gray-500 mt-1">
						{t('createdAt')}:
						<span className="text-gray-700 ml-1 font-medium">
							{toLocalDateStringShort(product.createdAt, lang)}
						</span>
					</p>
					{product.price && (
						<p className="mt-2 text-emerald-600 font-bold text-md">
							{formatNumber(product.price)} {t('currency')}
						</p>
					)}
				</div>

				<div className="mt-4 flex flex-col gap-y-4">
					<Link
						href={`/products/${product.slug}`}
						className="inline-block text-center btn-primary"
					>
						{t('viewProduct')}
					</Link>

					<AddToCart product={product} />
				</div>
			</div>
		</div>
	)
}
export default ProductCard
