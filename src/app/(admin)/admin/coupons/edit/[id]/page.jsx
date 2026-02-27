'use client'

import { useParams, useRouter } from 'next/navigation'
import { useGetOneCoupon, useUpdateCoupon } from '@/hooks/useCoupons'
import { useGetProducts } from '@/hooks/useProducts'
import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
import CouponForm from '@/components/CouponForm'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

export default function page() {
	const { id } = useParams()
	const { data: couponData, isLoading } = useGetOneCoupon(id)
	const { data: productsData } = useGetProducts()
	const { coupon } = couponData || {}
	const { products } = productsData || {}
	const { isLoading: isUpdating, mutateAsync } = useUpdateCoupon()
	const router = useRouter()
	const { t } = useLanguage()

	const [formData, setFormData] = useState({ code: '', amount: '', usageLimit: '' })
	const [type, setType] = useState('percent')
	const [productIds, setProductIds] = useState([])
	const [expireDate, setExpireDate] = useState(new Date())

	useEffect(() => {
		if (coupon) {
			setFormData({
				code: coupon.code,
				amount: coupon.amount,
				usageLimit: coupon.usageLimit,
			})
			setType(coupon.type)
			setProductIds(coupon.productIds || [])
			setExpireDate(new Date(coupon.expireDate))
		}
	}, [couponData])

	const handleFormChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const { message } = await mutateAsync({
				data: {
					...formData,
					type,
					expireDate: new Date(expireDate).toISOString(),
					productIds: productIds.map(p => p._id),
				},
				id: coupon._id,
			})
			toast.success(message)
			router.push('/admin/coupons')
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}

	if (isLoading) return <Loader />

	return (
		<div>
			<h1 className="mb-4 font-bold text-xl">{t('editCoupon')}</h1>
			<CouponForm
				expireDate={expireDate}
				setExpireDate={setExpireDate}
				type={type}
				setType={setType}
				formData={formData}
				isLoading={isUpdating}
				onChangeSelect={setProductIds}
				onFormChange={handleFormChange}
				onSubmit={handleSubmit}
				options={products}
				defaultValue={productIds}
			/>
		</div>
	)
}
