'use client'

import { useGetProducts } from '@/hooks/useProducts'
import { useState } from 'react'
import { useAddNewCoupon } from '@/hooks/useCoupons'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import CouponForm from '@/components/CouponForm'
import { useLanguage } from '@/context/LanguageContext'
import { useQueryClient } from '@tanstack/react-query'

export default function page() {
	const { data } = useGetProducts()
	const { products } = data || {}
	const { t } = useLanguage()
	const [formData, setFormData] = useState({
		code: '',
		amount: '',
		usageLimit: '',
	})
	const [type, setType] = useState('percent')
	const [productIds, setProductIds] = useState([])
	const [expireDate, setExpireDate] = useState(new Date())
	const { isLoading, mutateAsync } = useAddNewCoupon()
	const router = useRouter()
	const queryClient = useQueryClient()

	const handleFormChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const { message } = await mutateAsync({
				...formData,
				type,
				expireDate: new Date(expireDate).toISOString(),
				productIds: productIds.map(p => p._id),
			})
			queryClient.invalidateQueries({ queryKey: ['get-coupons'] })
			toast.success(message)
			router.push('/admin/coupons')
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}

	return (
		<div>
			<h1 className="mb-4 font-bold text-xl">{t('addDiscountCode')}</h1>
			<CouponForm
				expireDate={expireDate}
				setExpireDate={setExpireDate}
				type={type}
				setType={setType}
				formData={formData}
				isLoading={isLoading}
				onChangeSelect={setProductIds}
				onFormChange={handleFormChange}
				onSubmit={handleSubmit}
				options={products}
			/>
		</div>
	)
}
