export const categories = [
	{
		_id: '64a1b2c3d4e5f6789abc0101',
		title: 'لپ‌تاپ',
		englishTitle: 'Laptop',
		description: 'انواع لپ‌تاپ و نوت‌بوک برای کار، بازی و تحصیل',
		descriptionEn: 'All types of laptops and notebooks for work, gaming, and education',
		type: 'electronics',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0102',
		title: 'موبایل',
		englishTitle: 'Mobile',
		description: 'گوشی‌های هوشمند از برندهای معتبر دنیا',
		descriptionEn: 'Smartphones from world-renowned brands',
		type: 'electronics',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0103',
		title: 'هدفون',
		englishTitle: 'Headphone',
		description: 'هدفون و ایرفون با کیفیت صدای بالا',
		descriptionEn: 'High-quality headphones and earphones',
		type: 'accessories',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0104',
		title: 'لوازم جانبی',
		englishTitle: 'Accessories',
		description: 'لوازم جانبی کامپیوتر، موبایل و تبلت',
		descriptionEn: 'Accessories for computers, mobile phones, and tablets',
		type: 'accessories',
	},
]

export const findCategoryById = id => categories.find(c => c._id === id)

export function addCategoryItem(category) {
	categories.push(category)
}
export function removeCategoryItem(id) {
	const idx = categories.findIndex(c => c._id === id)
	if (idx !== -1) categories.splice(idx, 1)
}
export function updateCategoryItem(id, updates) {
	const idx = categories.findIndex(c => c._id === id)
	if (idx !== -1) categories[idx] = { ...categories[idx], ...updates }
}
