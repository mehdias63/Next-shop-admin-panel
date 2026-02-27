'use client'

import ProductForm from '@/components/ProductForm'
import { useGetCategories } from '@/hooks/useCategories'
import { useAddProduct } from '@/hooks/useProducts'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useLanguage } from '@/context/LanguageContext'
import { useQueryClient } from '@tanstack/react-query'

function addProductPage() {
	const { isLoading, mutateAsync } = useAddProduct()
	const { t } = useLanguage()
	const { data } = useGetCategories()
	const { categories } = data || {}
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		slug: '',
		brand: '',
		price: '',
		offPrice: '',
		discount: '',
		countInStock: '',
		imageLink: '',
	})
	const router = useRouter()
	const queryClient = useQueryClient()
	const [selectedCategory, setSelectedCategory] = useState('')

	const handChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const { message } = await mutateAsync({
				...formData,
				category: selectedCategory._id,
			})
			queryClient.invalidateQueries({ queryKey: ['get-products'] })
			toast.success(message)
			router.push('/admin/products')
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}

	return (
		<div className="mb-10">
			<h1 className="mb-4 font-bold text-xl text-blue-500">
				{t('addProduct')}
			</h1>
			<ProductForm
				onSubmit={handleSubmit}
				categories={categories}
				setSelectedCategory={setSelectedCategory}
				isLoading={isLoading}
				productData={formData}
				productDataOnChange={handChange}
			/>
		</div>
	)
}
export default addProductPage
