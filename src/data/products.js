export const products = [
	{
		_id: '64a1b2c3d4e5f6789abc0001',
		title: 'لپ‌تاپ ایسوس VivoBook 15',
		titleEn: 'Asus VivoBook 15 Laptop',
		slug: 'asus-vivobook-15',
		description:
			'لپ‌تاپ قدرتمند ایسوس با پردازنده Intel Core i5 نسل ۱۲، رم ۱۶ گیگابایت و SSD 512 گیگابایت. مناسب برای کار، برنامه‌نویسی و تفریح.',
		descriptionEn:
			'Powerful Asus laptop with Intel Core i5 12th Gen, 16GB RAM, and 512GB SSD. Perfect for work, coding, and entertainment.',
		price: 25000000,
		discount: 10,
		offPrice: 22500000,
		countInStock: 15,
		category: { _id: '64a1b2c3d4e5f6789abc0101', title: 'لپ‌تاپ', titleEn: 'Laptop' },
		image: '/image1.jfif',
		createdAt: '2024-01-15T10:00:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0002',
		title: 'گوشی سامسونگ Galaxy A54',
		titleEn: 'Samsung Galaxy A54 Smartphone',
		slug: 'samsung-galaxy-a54',
		description:
			'گوشی هوشمند سامسونگ با نمایشگر Super AMOLED 6.4 اینچ، دوربین 50 مگاپیکسل و باتری 5000 میلی‌آمپر ساعت.',
		descriptionEn:
			'Samsung smartphone with a 6.4" Super AMOLED display, 50MP camera, and 5000mAh battery.',
		price: 12000000,
		discount: 5,
		offPrice: 11400000,
		countInStock: 30,
		category: { _id: '64a1b2c3d4e5f6789abc0102', title: 'موبایل', titleEn: 'Mobile' },
		image: '/image1.jfif',
		createdAt: '2024-02-10T08:30:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0003',
		title: 'هدفون بی‌سیم سونی WH-1000XM4',
		titleEn: 'Sony WH-1000XM4 Wireless Headphone',
		slug: 'sony-wh1000xm4',
		description:
			'هدفون بی‌سیم سونی با قابلیت حذف نویز فعال، صدای Hi-Res Audio و باتری تا ۳۰ ساعت.',
		descriptionEn:
			'Sony wireless headphone with active noise cancellation, Hi-Res Audio, and up to 30 hours battery life.',
		price: 8500000,
		discount: 0,
		offPrice: 8500000,
		countInStock: 20,
		category: { _id: '64a1b2c3d4e5f6789abc0103', title: 'هدفون', titleEn: 'Headphone' },
		image: '/image1.jfif',
		createdAt: '2024-03-05T14:00:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0004',
		title: 'کیبورد مکانیکی Redragon K552',
		titleEn: 'Redragon K552 Mechanical Keyboard',
		slug: 'redragon-k552',
		description:
			'کیبورد مکانیکی گیمینگ با سوئیچ‌های قرمز، نورپردازی RGB رنگارنگ و ساختار فلزی محکم.',
		descriptionEn:
			'Gaming mechanical keyboard with red switches, colorful RGB lighting, and sturdy metal construction.',
		price: 2500000,
		discount: 15,
		offPrice: 2125000,
		countInStock: 50,
		category: { _id: '64a1b2c3d4e5f6789abc0104', title: 'لوازم جانبی', titleEn: 'Accessories' },
		image: '/image1.jfif',
		createdAt: '2024-03-20T09:15:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0005',
		title: 'مانیتور Samsung 24 اینچ',
		titleEn: 'Samsung 24" Monitor',
		slug: 'samsung-monitor-24',
		description:
			'مانیتور Samsung با پنل IPS 24 اینچ، رزولوشن Full HD 1080p و نرخ تازه‌سازی ۷۵ هرتز.',
		descriptionEn:
			'Samsung monitor with a 24" IPS panel, Full HD 1080p resolution, and 75Hz refresh rate.',
		price: 9000000,
		discount: 8,
		offPrice: 8280000,
		countInStock: 12,
		category: { _id: '64a1b2c3d4e5f6789abc0104', title: 'لوازم جانبی', titleEn: 'Accessories' },
		image: '/image1.jfif',
		createdAt: '2024-04-01T11:00:00.000Z',
	},
]

export const findProductBySlug = slug => products.find(p => p.slug === slug)
export const findProductById = id => products.find(p => p._id === id)

export function addProductItem(product) {
	products.push(product)
}
export function removeProductItem(id) {
	const idx = products.findIndex(p => p._id === id)
	if (idx !== -1) products.splice(idx, 1)
}
export function updateProductItem(id, updates) {
	const idx = products.findIndex(p => p._id === id)
	if (idx !== -1) products[idx] = { ...products[idx], ...updates }
}
