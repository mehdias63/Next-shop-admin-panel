const fa = {
	// Navigation
	home: 'خانه',
	products: 'محصولات',
	userPanel: 'پنل کاربر',
	adminPanel: 'پنل ادمین',
	cart: 'سبد خرید',
	login: 'ورود',
	logout: 'خروج از حساب کاربری',

	// Common
	dashboard: 'داشبورد',
	categories: 'دسته بندی',
	orders: 'سفارشات',
	users: 'کاربران',
	actions: 'عملیات',
	submit: 'تایید',
	back: 'بازگشت',
	title: 'عنوان',
	description: 'توضیحات',
	type: 'نوع',
	status: 'وضعیت',
	amount: 'مقدار',
	price: 'قیمت',
	discount: 'تخفیف',
	priceWithDiscount: 'قیمت با تخفیف',
	stock: 'موجودی',
	date: 'تاریخ',
	category: 'دسته بندی',
	name: 'نام',
	email: 'ایمیل',
	phoneNumber: 'شماره موبایل',

	// Table heads
	invoiceNumber: 'شماره فاکتور',
	joinDate: 'تاریخ پیوستن',
	expiryDate: 'تاریخ انقضا',
	usageCount: 'مقدار مصرفی',
	capacity: 'ظرفیت',
	code: 'کد',
	success: 'موفق',
	failed: 'ناموفق',
	englishTitle: 'عنوان انگلیسی',
	user: 'کاربر',

	// Home page
	welcomeTitle: 'به فروشگاه ما خوش آمدید!',
	welcomeSubtitle:
		'با ورود به حساب کاربری خود، به محصولات متنوع، تخفیف‌های ویژه و تجربه‌ای بی‌نظیر در خرید آنلاین دسترسی پیدا کنید.',
	viewProducts: 'مشاهده محصولات',
	loginToAccount: 'ورود به حساب کاربری',

	// Admin dashboard
	adminWelcomeTitle: 'به پنل مدیریت خوش آمدید 🎉',
	adminWelcomeDesc:
		'از اینجا می‌تونید محصولات، سفارشات، کاربران، کوپن‌ها و دسته‌بندی‌ها رو مدیریت کنید.',
	adminWelcomeStart: 'برای شروع یکی از گزینه‌ها رو از نوار کناری انتخاب کنید.',

	// Admin - products
	addProduct: 'اضافه کردن محصول',
	editProductInfo: 'ویرایش اطلاعات محصول',
	productDetails: 'جزئیات محصول',
	productDetailsSubtitle: 'مشخصات کامل محصول را در این صفحه مشاهده می‌کنید.',
	productNotFound: 'محصول یافت نشد.',
	productImage: 'تصویر محصول',
	noImage: 'بدون تصویر',
	productName: 'نام محصول',
	mainPrice: 'قیمت اصلی',
	finalPrice: 'قیمت نهایی',
	stockAmount: 'موجودی انبار',
	currency: 'تومان',

	// Admin - categories
	addCategory: 'اضافه کردن دسته بندی',
	addNewCategory: 'افزودن دسته بندی جدید',
	editCategory: 'ویرایش دسته بندی جدید',
	categoryDetails: 'جزئیات دسته‌بندی',
	categoryDetailsSubtitle: 'اطلاعات دسته‌بندی انتخاب‌شده را مشاهده می‌کنید.',
	categoryNotFound: 'دسته‌بندی پیدا نشد.',
	persianTitle: 'عنوان فارسی',
	categoryType: 'نوع دسته‌بندی',

	// Admin - coupons
	addDiscountCode: 'اضافه کردن کد تخفیف',
	discountCodes: 'کد های تخفیف',
	editCoupon: 'ویرایش کد تخفیف',
	couponDetails: 'جزئیات کد تخفیف',
	couponDetailsSubtitle: 'اطلاعات کد تخفیف انتخاب‌ شده را مشاهده می‌کنید.',
	couponNotFound: 'کوپن پیدا نشد.',
	discountCodeLabel: 'کد تخفیف',
	discountType: 'نوع تخفیف',
	discountAmount: 'مقدار تخفیف',
	usageAmount: 'میزان مصرف',
	relatedProducts: 'محصولات مرتبط',
	noProductsSelected: 'محصولی انتخاب نشده است.',

	// Admin - users
	usersInfo: 'اطلاعات کاربران',

	// Admin - payments/orders
	ordersTitle: 'سفارشات',

	// Products shop
	productsShop: '🛍️ فروشگاه محصولات',
	noProductsFound: 'محصولی یافت نشد.',
	createdAt: 'تاریخ ساخت',
	viewProduct: 'مشاهده محصول',

	// Sort / Filter
	sortBy: '🔽 مرتب‌سازی بر اساس',
	newest: 'جدید ترین',
	oldest: 'قدیمی ترین',
	categoriesTitle: '📂 دسته‌بندی‌ها',

	// Product detail
	productPrice: 'قیمت محصول',
	productPriceWithDiscount: 'قیمت با تخفیف',

	// Add to cart / cart actions
	addToCart: 'اضافه کردن به سبد خرید',
	continueOrder: 'ادامه سفارش',
	pleaseLoginFirst: 'لطفا ابتدا لاگین کنید.',

	// Auth
	mobileNumber: 'شماره موبایل',
	sendVerificationCode: 'ارسال کد تایید',
	enterVerificationCode: 'کد تایید را وارد کنید',
	resendCode: 'ارسال مجدد کد؟',
	secondsUntilResend: n => `${n} ثانیه تا ارسال مجدد کد`,
	yourVerificationCode: 'کد تایید شما',
	loginSuccess: 'ورود با موفقیت انجام شد',
	invalidCode: 'کد وارد شده اشتباه است',

	// Cart
	cartLoginRequired: 'برای مشاهده سبد خرید لطفا لاگین کنید',
	goToLogin: 'رفتن به صفحه لاگین؟',
	cartEmpty: 'سبد خرید خالیه!',
	goToProducts: 'رفتن به صفحه محصولات',
	cartPrice: 'قیمت',
	cartQuantity: 'تعداد',
	paymentInfo: 'اطلاعات پرداخت',
	totalAmount: 'جمع کل',
	totalDiscount: 'تخفیف',
	payableAmount: 'مبلغ قابل پرداخت',
	placeOrder: 'ثبت سفارش',

	// Profile
	userDashboardTitle: name => `داشبورد کاربری ${name}`,
	profileDesc: 'اطلاعات، سفارشات و فعالیت‌های خود را در اینجا مشاهده کنید.',
	lastOrders: 'آخرین سفارشات کاربر',
	viewAllOrders: 'مشاهده همه سفارشات',
	userOrders: 'سفارشات کاربر',
	userInfoTitle: 'اطلاعات کاربری',

	// Complete profile
	fullName: 'نام و نام خانوادگی',

	// Forms - ProductForm labels
	slug: 'اسلاگ',
	brand: 'برند',
	priceWithDiscountForm: 'قیمت روی تخفیف',
	productImageLink: 'لینک عکس محصول',

	// Forms - CategoryForm
	englishTitleLabel: 'عنوان انگلیسی',
	categoryTypeProduct: 'محصول',
	categoryTypePost: 'پست',
	categoryTypeTicket: 'تیکت',
	categoryTypeComments: 'نظرات',

	// Forms - CouponForm
	discountCodeType: 'نوع کد تخفیف',
	percent: 'درصد',
	fixedPrice: 'قیمت ثابت',
	includesProducts: 'شامل محصولات',
}

export default fa
