'use client'

import { useGetUser } from '@/hooks/useAuth'
import PaymentTable from './PaymentTable'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function Payments() {
	const { data, isLoading } = useGetUser()
	const { user, payments } = data || {}
	const { t } = useLanguage()

	if (isLoading) return <Loader />
	return (
		<div>
			<h1>{t('userOrders')}</h1>
			<PaymentTable payments={payments} />
		</div>
	)
}
export default Payments
