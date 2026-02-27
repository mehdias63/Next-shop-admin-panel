// Admin user list
export const users = [
	{
		_id: '64a1b2c3d4e5f6789abc0401',
		name: 'Ali Mohammadi',
		email: 'ali@example.com',
		phoneNumber: '09123456789',
		isVerifiedPhoneNumber: true,
		Products: [
			{ title: 'لپ‌تاپ ایسوس VivoBook 15', titleEn: 'Asus VivoBook 15 Laptop' },
			{ title: 'کیبورد مکانیکی Redragon K552', titleEn: 'Redragon K552 Mechanical Keyboard' },
			{ title: 'مانیتور Samsung 24 اینچ', titleEn: 'Samsung 24" Monitor' },
		],
		createdAt: '2024-01-01T08:00:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0402',
		name: 'Sara Ahmadi',
		email: 'sara@example.com',
		phoneNumber: '09187654321',
		isVerifiedPhoneNumber: true,
		Products: [{ title: 'هدفون بی‌سیم سونی WH-1000XM4', titleEn: 'Sony WH-1000XM4 Wireless Headphone' }],
		createdAt: '2024-01-15T10:30:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0403',
		name: 'Reza Karimi',
		email: 'reza@example.com',
		phoneNumber: '09109988776',
		isVerifiedPhoneNumber: false,
		Products: [],
		createdAt: '2024-02-20T14:00:00.000Z',
	},
]

// Logged-in user profile (returned by getUserProfile)
export const userProfile = {
	user: {
		_id: '64a1b2c3d4e5f6789abc0401',
		name: 'علی محمدی',
		nameEn: 'Ali Mohammadi',
		email: 'ali@example.com',
		phoneNumber: '09123456789',
		isVerifiedPhoneNumber: true,
		biography: 'Next-Shop online store user',
		cart: {
			products: [],
			productDetail: [],
			payDetail: {
				totalPrice: 0,
				totalGrossPrice: 0,
				totalOffAmount: 0,
			},
		},
	},
	cart: {
		productDetail: [],
		payDetail: {
			totalPrice: 0,
			totalGrossPrice: 0,
			totalOffAmount: 0,
		},
	},
	payments: [
		{
			_id: '64a1b2c3d4e5f6789abc0301',
			invoiceNumber: 'INV-2024-001',
			description: 'خرید لپ‌تاپ ایسوس و کیبورد Redragon',
			descriptionEn: 'Purchase of Asus Laptop and Redragon Keyboard',
			amount: 24625000,
			status: 'COMPLETED',
			cart: {
				productDetail: [
					{ _id: '64a1b2c3d4e5f6789abc0001', title: 'لپ‌تاپ ایسوس VivoBook 15', titleEn: 'Asus VivoBook 15 Laptop' },
					{ _id: '64a1b2c3d4e5f6789abc0004', title: 'کیبورد مکانیکی Redragon K552', titleEn: 'Redragon K552 Mechanical Keyboard' },
				],
			},
			createdAt: '2024-02-15T12:30:00.000Z',
		},
		{
			_id: '64a1b2c3d4e5f6789abc0304',
			invoiceNumber: 'INV-2024-004',
			description: 'خرید مانیتور Samsung و کیبورد Redragon',
			descriptionEn: 'Purchase of Samsung Monitor and Redragon Keyboard',
			amount: 10405000,
			status: 'COMPLETED',
			cart: {
				productDetail: [
					{ _id: '64a1b2c3d4e5f6789abc0005', title: 'مانیتور Samsung 24 اینچ', titleEn: 'Samsung 24" Monitor' },
					{ _id: '64a1b2c3d4e5f6789abc0004', title: 'کیبورد مکانیکی Redragon K552', titleEn: 'Redragon K552 Mechanical Keyboard' },
				],
			},
			createdAt: '2024-04-05T11:20:00.000Z',
		},
		{
			_id: '64a1b2c3d4e5f6789abc0305',
			invoiceNumber: 'INV-2024-005',
			description: 'خرید هدفون سونی',
			descriptionEn: 'Purchase of Sony Headphone',
			amount: 8500000,
			status: 'FAILED',
			cart: {
				productDetail: [
					{ _id: '64a1b2c3d4e5f6789abc0003', title: 'هدفون بی‌سیم سونی WH-1000XM4', titleEn: 'Sony WH-1000XM4 Wireless Headphone' },
				],
			},
			createdAt: '2024-05-01T10:00:00.000Z',
		},
	],
}

export const findUserById = id => users.find(u => u._id === id)
