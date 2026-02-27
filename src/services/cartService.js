import { userProfile } from '@/data/users'
import { findProductById } from '@/data/products'

function recalcPayDetail(productDetail) {
	let totalGrossPrice = 0
	let totalOffAmount = 0
	for (const item of productDetail) {
		totalGrossPrice += item.price * item.quantity
		totalOffAmount += (item.price - item.offPrice) * item.quantity
	}
	return {
		totalGrossPrice,
		totalOffAmount,
		totalPrice: totalGrossPrice - totalOffAmount,
	}
}

function syncCart() {
	const detail = userProfile.user.cart.productDetail
	const payDetail = recalcPayDetail(detail)
	userProfile.user.cart.payDetail = payDetail
	userProfile.cart.productDetail = [...detail]
	userProfile.cart.payDetail = payDetail
}

export function addToCart(productId) {
	const cart = userProfile.user.cart
	const existing = cart.products.find(p => p.productId === productId)

	if (existing) {
		existing.quantity += 1
		const detailItem = cart.productDetail.find(p => p._id === productId)
		if (detailItem) detailItem.quantity += 1
	} else {
		const product = findProductById(productId)
		if (!product) return Promise.reject(new Error('Product not found'))
		cart.products.push({ productId, quantity: 1 })
		cart.productDetail.push({
			_id: product._id,
			title: product.title,
			titleEn: product.titleEn || product.title,
			price: product.price,
			discount: product.discount,
			offPrice: product.offPrice,
			quantity: 1,
		})
	}

	syncCart()
	return Promise.resolve({ message: 'محصول به سبد خرید اضافه شد' })
}

export function decrementFromCart(productId) {
	const cart = userProfile.user.cart
	const existingIdx = cart.products.findIndex(p => p.productId === productId)
	if (existingIdx === -1)
		return Promise.resolve({ message: 'محصول در سبد خرید نیست' })

	if (cart.products[existingIdx].quantity > 1) {
		cart.products[existingIdx].quantity -= 1
		const detailItem = cart.productDetail.find(p => p._id === productId)
		if (detailItem) detailItem.quantity -= 1
	} else {
		cart.products.splice(existingIdx, 1)
		const detailIdx = cart.productDetail.findIndex(p => p._id === productId)
		if (detailIdx !== -1) cart.productDetail.splice(detailIdx, 1)
	}

	syncCart()
	return Promise.resolve({ message: 'محصول از سبد خرید حذف شد' })
}
