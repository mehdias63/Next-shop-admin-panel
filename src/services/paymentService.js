import { payments, findPaymentById } from '@/data/payments'

export function createPayment() {
	return Promise.resolve({ message: 'سفارش با موفقیت ثبت شد' })
}

export function getAllPayments() {
	return Promise.resolve({ payments })
}

export function getPaymentById(id) {
	const payment = findPaymentById(id) || payments[0]
	return Promise.resolve({ payment })
}
