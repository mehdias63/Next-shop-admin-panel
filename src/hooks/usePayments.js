import {
	getAllPayments,
	getPaymentById,
} from '@/services/paymentService'
import { useQuery } from '@tanstack/react-query'
import { useLanguage } from '@/context/LanguageContext'
import { localizePayment } from '@/utils/localizeData'

export const useGetPayments = () => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['payments', lang],
		queryFn: getAllPayments,
		retry: false,
		select: data => ({ payments: data.payments.map(p => localizePayment(p, lang)) }),
	})
}

export const useGetPaymentById = id => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-payment', id, lang],
		queryFn: () => getPaymentById(id),
		retry: false,
		enabled: !!id,
		select: data => ({ payment: localizePayment(data.payment, lang) }),
	})
}
