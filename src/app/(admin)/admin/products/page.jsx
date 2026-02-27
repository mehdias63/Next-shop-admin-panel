'use client'

import { useGetProducts } from '@/hooks/useProducts'
import ProductListTable from './ProductListTable'
import Link from 'next/link'
import { HiPlusCircle } from 'react-icons/hi'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function page() {
	const { data, isLoading } = useGetProducts()
	const { products } = data || {}
	const { t } = useLanguage()

	if (isLoading) return <Loader />

	return (
		<div className="p-4 md:p-6 bg-white  rounded-xl shadow-sm">
			<div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
				<h1 className="text-2xl font-extrabold text-gray-800 mb-4">
					{t('products')}
				</h1>

				<Link href="/admin/products/add" className="link-btn">
					<HiPlusCircle className="w-5 h-5" />
					<span>{t('addProduct')}</span>
				</Link>
			</div>

			<ProductListTable products={products} />
		</div>
	)
}
export default page
