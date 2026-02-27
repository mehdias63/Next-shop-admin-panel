'use client'

import { useGetPayments } from '@/hooks/usePayments'
import PaymentListTable from './PaymentListTable'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function page() {
	const { isLoading, data } = useGetPayments()
	const { payments } = data || {}
	const { t } = useLanguage()

	if (isLoading) return <Loader />
	return (
		<div>
			<div className="mb-5 flex items-center justify-between">
				<h1 className="text-xl font-bold mb-5">{t('ordersTitle')}</h1>
			</div>
			<PaymentListTable payments={payments} />
		</div>
	)
}
export default page
