'use client'
import { useGetCategories } from '@/hooks/useCategories'
import Link from 'next/link'
import CategoryListTable from './CategoryListTable'
import { HiPlusCircle } from 'react-icons/hi'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function page() {
	const { data, isLoading } = useGetCategories()
	const { categories } = data || {}
	const { t } = useLanguage()

	if (isLoading) return <Loader />

	return (
		<div className="p-4 md:p-6 bg-white rounded-xl shadow-sm">
			<div className="mb-5 flex items-center justify-between">
				<h1 className="text-2xl font-extrabold text-gray-800 mb-4">
					{t('categories')}
				</h1>
				<Link href="/admin/categories/add" className="link-btn">
					<HiPlusCircle className="w-6 h-6" />{' '}
					<span>{t('addCategory')}</span>
				</Link>
			</div>
			<CategoryListTable categories={categories} />
		</div>
	)
}
export default page
