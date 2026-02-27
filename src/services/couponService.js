import {
	coupons,
	findCouponById,
	addCouponItem,
	removeCouponItem,
	updateCouponItem,
} from '@/data/coupons'
import { findProductById } from '@/data/products'

export function getAllCoupons() {
	return Promise.resolve({ coupons: [...coupons] })
}

export function getOneCoupon(id) {
	const coupon = findCouponById(id) || coupons[0]
	return Promise.resolve({ coupon })
}

export function addNewCoupon(formData) {
	const productIds = (formData.productIds || []).map(id => {
		const p = findProductById(id)
		return p
			? { _id: p._id, title: p.title, titleEn: p.titleEn }
			: { _id: id, title: '', titleEn: '' }
	})
	const newCoupon = {
		_id: `cpn-${Date.now()}`,
		code: formData.code || '',
		type: formData.type || 'percent',
		amount: Number(formData.amount) || 0,
		expireDate: formData.expireDate || new Date().toISOString(),
		usageCount: 0,
		usageLimit: Number(formData.usageLimit) || 0,
		productIds,
	}
	addCouponItem(newCoupon)
	return Promise.resolve({ message: 'کد تخفیف با موفقیت اضافه شد' })
}

export function updateCoupon({ data, id }) {
	const productIds = (data.productIds || []).map(pid => {
		const p = findProductById(pid)
		return p
			? { _id: p._id, title: p.title, titleEn: p.titleEn }
			: { _id: pid, title: '', titleEn: '' }
	})
	updateCouponItem(id, { ...data, productIds })
	return Promise.resolve({ message: 'کد تخفیف با موفقیت ویرایش شد' })
}

export function deleteCoupon(id) {
	removeCouponItem(id)
	return Promise.resolve({ message: 'کد تخفیف با موفقیت حذف شد' })
}
