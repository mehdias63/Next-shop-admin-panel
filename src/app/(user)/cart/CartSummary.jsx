'use client'

import Loader from '@/ui/Loader'
import { createPayment } from '@/services/paymentService'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { useLanguage } from '@/context/LanguageContext'

function CartSummary({ payDetail }) {
	const { totalOffAmount, totalPrice, totalGrossPrice } = payDetail
	const { t, formatNumber } = useLanguage()
	const { isLoading, mutateAsync } = useMutation({
		mutationFn: createPayment,
	})
	const queryClient = useQueryClient()

	const createPaymentHandler = async () => {
		try {
			const { message } = await mutateAsync()
			toast.success(message)
			queryClient.invalidateQueries({ queryKey: ['get-user'] })
		} catch (error) {
			if (error?.response?.data) {
				toast.error(error.response.data.message)
			}
		}
	}

	return (
		<div className="border border-gray-300 px-2 py-4 rounded-xl">
			<p className="mb-4 font-bold">{t('paymentInfo')}</p>
			<div className="mb-4 flex items-center justify-between">
				<span>{t('totalAmount')}</span>
				<span>{formatNumber(totalGrossPrice)}</span>
			</div>
			<div className="mb-4 flex items-center justify-between">
				<span>{t('totalDiscount')}</span>
				<span>{formatNumber(totalOffAmount)} - </span>
			</div>
			<div className="mb-6 flex items-center justify-between font-bold">
				<span>{t('payableAmount')}</span>
				<span>{formatNumber(totalPrice)}</span>
			</div>
			<div>
				{isLoading ? (
					<Loader />
				) : (
					<button
						className="btn-primary"
						onClick={createPaymentHandler}
					>
						{t('placeOrder')}
					</button>
				)}
			</div>
		</div>
	)
}
export default CartSummary
