export const payments = [
	{
		_id: '64a1b2c3d4e5f6789abc0301',
		invoiceNumber: 'INV-2024-001',
		description: 'خرید لپ‌تاپ ایسوس و کیبورد Redragon',
		descriptionEn: 'Purchase of Asus Laptop and Redragon Keyboard',
		amount: 24625000,
		status: 'COMPLETED',
		user: {
			_id: '64a1b2c3d4e5f6789abc0401',
			name: 'Ali Mohammadi',
			email: 'ali@example.com',
			phoneNumber: '09123456789',
		},
		cart: {
			productDetail: [
				{
					_id: '64a1b2c3d4e5f6789abc0001',
					title: 'لپ‌تاپ ایسوس VivoBook 15',
					titleEn: 'Asus VivoBook 15 Laptop',
					price: 22500000,
					quantity: 1,
				},
				{
					_id: '64a1b2c3d4e5f6789abc0004',
					title: 'کیبورد مکانیکی Redragon K552',
					titleEn: 'Redragon K552 Mechanical Keyboard',
					price: 2125000,
					quantity: 1,
				},
			],
		},
		createdAt: '2024-02-15T12:30:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0302',
		invoiceNumber: 'INV-2024-002',
		description: 'خرید هدفون بی‌سیم سونی',
		descriptionEn: 'Purchase of Sony Wireless Headphone',
		amount: 8500000,
		status: 'COMPLETED',
		user: {
			_id: '64a1b2c3d4e5f6789abc0402',
			name: 'Sara Ahmadi',
			email: 'sara@example.com',
			phoneNumber: '09187654321',
		},
		cart: {
			productDetail: [
				{
					_id: '64a1b2c3d4e5f6789abc0003',
					title: 'هدفون بی‌سیم سونی WH-1000XM4',
					titleEn: 'Sony WH-1000XM4 Wireless Headphone',
					price: 8500000,
					quantity: 1,
				},
			],
		},
		createdAt: '2024-03-01T09:00:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0303',
		invoiceNumber: 'INV-2024-003',
		description: 'خرید گوشی سامسونگ Galaxy A54',
		descriptionEn: 'Purchase of Samsung Galaxy A54 Smartphone',
		amount: 11400000,
		status: 'FAILED',
		user: {
			_id: '64a1b2c3d4e5f6789abc0403',
			name: 'Reza Karimi',
			email: 'reza@example.com',
			phoneNumber: '09109988776',
		},
		cart: {
			productDetail: [
				{
					_id: '64a1b2c3d4e5f6789abc0002',
					title: 'گوشی سامسونگ Galaxy A54',
					titleEn: 'Samsung Galaxy A54 Smartphone',
					price: 11400000,
					quantity: 1,
				},
			],
		},
		createdAt: '2024-03-10T15:45:00.000Z',
	},
	{
		_id: '64a1b2c3d4e5f6789abc0304',
		invoiceNumber: 'INV-2024-004',
		description: 'خرید مانیتور Samsung و کیبورد Redragon',
		descriptionEn: 'Purchase of Samsung Monitor and Redragon Keyboard',
		amount: 10405000,
		status: 'COMPLETED',
		user: {
			_id: '64a1b2c3d4e5f6789abc0401',
			name: 'Ali Mohammadi',
			email: 'ali@example.com',
			phoneNumber: '09123456789',
		},
		cart: {
			productDetail: [
				{
					_id: '64a1b2c3d4e5f6789abc0005',
					title: 'مانیتور Samsung 24 اینچ',
					titleEn: 'Samsung 24" Monitor',
					price: 8280000,
					quantity: 1,
				},
				{
					_id: '64a1b2c3d4e5f6789abc0004',
					title: 'کیبورد مکانیکی Redragon K552',
					titleEn: 'Redragon K552 Mechanical Keyboard',
					price: 2125000,
					quantity: 1,
				},
			],
		},
		createdAt: '2024-04-05T11:20:00.000Z',
	},
]

export const findPaymentById = id => payments.find(p => p._id === id)
