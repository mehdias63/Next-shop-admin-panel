import {
	products,
	findProductBySlug,
	findProductById,
	addProductItem,
	removeProductItem,
	updateProductItem,
} from '@/data/products'
import { findCategoryById } from '@/data/categories'

export function getProducts(queryStr = '') {
	const params = new URLSearchParams(queryStr)
	let result = [...products]

	const categoryParam = params.get('category')
	if (categoryParam) {
		const cats = categoryParam
			.split(',')
			.map(c => c.trim().toLowerCase())
			.filter(Boolean)
		if (cats.length > 0) {
			result = result.filter(p =>
				cats.includes((p.category.titleEn || '').toLowerCase()),
			)
		}
	}

	const sort = params.get('sort')
	if (sort === 'earliest') {
		result = result.sort(
			(a, b) => new Date(a.createdAt) - new Date(b.createdAt),
		)
	} else {
		result = result.sort(
			(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
		)
	}

	return Promise.resolve({ products: result })
}

export function getOneProductBySlug(slug) {
	const product = findProductBySlug(slug) || products[0]
	return Promise.resolve({ product })
}

export function getOneProductById(id) {
	const product = findProductById(id) || products[0]
	return Promise.resolve({ product })
}

export function likeProduct() {
	return Promise.resolve({ message: 'liked' })
}

export function addProduct(formData) {
	const category =
		findCategoryById(formData.category) ||
		{ _id: formData.category || '', title: '', titleEn: '' }
	const newProduct = {
		_id: `prod-${Date.now()}`,
		title: formData.title || '',
		titleEn: formData.title || '',
		description: formData.description || '',
		descriptionEn: formData.description || '',
		slug: formData.slug || `product-${Date.now()}`,
		brand: formData.brand || '',
		price: Number(formData.price) || 0,
		discount: Number(formData.discount) || 0,
		offPrice: Number(formData.offPrice) || 0,
		countInStock: Number(formData.countInStock) || 0,
		category,
		image: formData.imageLink || '/image1.jfif',
		createdAt: new Date().toISOString(),
	}
	addProductItem(newProduct)
	return Promise.resolve({ message: 'محصول با موفقیت اضافه شد' })
}

export function removeProduct(id) {
	removeProductItem(id)
	return Promise.resolve({ message: 'محصول با موفقیت حذف شد' })
}

export function updateProduct({ data, id }) {
	const updates = { ...data }
	if (data.category) {
		updates.category =
			findCategoryById(data.category) ||
			{ _id: data.category, title: '', titleEn: '' }
	}
	updateProductItem(id, updates)
	return Promise.resolve({ message: 'محصول با موفقیت ویرایش شد' })
}
