export const coupons = [
	{
		_id: '64a1b2c3d4e5f6789abc0201',
		code: 'SAVE10',
		type: 'percentage',
		amount: 10,
		expireDate: '2025-12-31T23:59:59.000Z',
		usageCount: 45,
		usageLimit: 100,
		productIds: [
			{ _id: '64a1b2c3d4e5f6789abc0001', title: 'لپ‌تاپ ایسوس VivoBook 15', titleEn: 'Asus VivoBook 15 Laptop' },
			{ _id: '64a1b2c3d4e5f6789abc0005', title: 'مانیتور Samsung 24 اینچ', titleEn: 'Samsung 24" Monitor' },
		],
	},
	{
		_id: '64a1b2c3d4e5f6789abc0202',
		code: 'FLAT50K',
		type: 'fixed',
		amount: 50000,
		expireDate: '2025-06-30T23:59:59.000Z',
		usageCount: 12,
		usageLimit: 50,
		productIds: [
			{ _id: '64a1b2c3d4e5f6789abc0002', title: 'گوشی سامسونگ Galaxy A54', titleEn: 'Samsung Galaxy A54 Smartphone' },
		],
	},
	{
		_id: '64a1b2c3d4e5f6789abc0203',
		code: 'VIP20',
		type: 'percentage',
		amount: 20,
		expireDate: '2025-03-31T23:59:59.000Z',
		usageCount: 3,
		usageLimit: 10,
		productIds: [],
	},
]

export const findCouponById = id => coupons.find(c => c._id === id)

export function addCouponItem(coupon) {
	coupons.push(coupon)
}
export function removeCouponItem(id) {
	const idx = coupons.findIndex(c => c._id === id)
	if (idx !== -1) coupons.splice(idx, 1)
}
export function updateCouponItem(id, updates) {
	const idx = coupons.findIndex(c => c._id === id)
	if (idx !== -1) coupons[idx] = { ...coupons[idx], ...updates }
}
