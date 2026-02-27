// Returns the correct language field: uses `titleEn` / `descriptionEn` when lang is 'en'

function localizeProductDetail(item, lang) {
	if (lang !== 'en') return item
	return { ...item, title: item.titleEn || item.title }
}

export function localizeProduct(product, lang) {
	if (lang !== 'en') return product
	return {
		...product,
		title: product.titleEn || product.title,
		description: product.descriptionEn || product.description,
		category: product.category
			? { ...product.category, title: product.category.titleEn || product.category.title }
			: product.category,
	}
}

export function localizeCategory(category, lang) {
	if (lang !== 'en') return category
	return {
		...category,
		title: category.englishTitle || category.title,
		description: category.descriptionEn || category.description,
	}
}

export function localizeCoupon(coupon, lang) {
	if (lang !== 'en') return coupon
	return {
		...coupon,
		productIds: coupon.productIds.map(p => localizeProductDetail(p, lang)),
	}
}

export function localizePayment(payment, lang) {
	if (lang !== 'en') return payment
	return {
		...payment,
		description: payment.descriptionEn || payment.description,
		cart: {
			...payment.cart,
			productDetail: payment.cart.productDetail.map(p =>
				localizeProductDetail(p, lang),
			),
		},
	}
}

export function localizeUserProfile(data, lang) {
	const user = data.user
		? { ...data.user, name: lang === 'en' ? (data.user.nameEn || data.user.name) : data.user.name }
		: data.user
	if (lang !== 'en') return { ...data, user }
	return {
		...data,
		user,
		cart: data.cart
			? {
					...data.cart,
					productDetail: data.cart.productDetail.map(p =>
						localizeProductDetail(p, lang),
					),
				}
			: data.cart,
		payments: data.payments
			? data.payments.map(pmt => localizePayment(pmt, lang))
			: data.payments,
	}
}

export function localizeUser(user, lang) {
	if (lang !== 'en') return user
	return {
		...user,
		Products: user.Products.map(p => localizeProductDetail(p, lang)),
	}
}
