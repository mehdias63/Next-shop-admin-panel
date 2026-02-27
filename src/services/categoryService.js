import {
	categories,
	findCategoryById,
	addCategoryItem,
	removeCategoryItem,
	updateCategoryItem,
} from '@/data/categories'

export function getCategories() {
	return Promise.resolve({ categories: [...categories] })
}

export function getCategoryById(id) {
	const category = findCategoryById(id) || categories[0]
	return Promise.resolve({ category })
}

export function addNewCategory(formData) {
	const newCategory = {
		_id: `cat-${Date.now()}`,
		title: formData.title || '',
		englishTitle: formData.englishTitle || formData.title || '',
		titleEn: formData.englishTitle || formData.title || '',
		description: formData.description || '',
		descriptionEn: formData.description || '',
		type: formData.type || 'product',
	}
	addCategoryItem(newCategory)
	return Promise.resolve({ message: 'دسته‌بندی با موفقیت اضافه شد' })
}

export function updateCategory({ data, id }) {
	const updates = {
		...data,
		titleEn: data.englishTitle || data.title || '',
	}
	updateCategoryItem(id, updates)
	return Promise.resolve({ message: 'دسته‌بندی با موفقیت ویرایش شد' })
}

export function removeCategory(id) {
	removeCategoryItem(id)
	return Promise.resolve({ message: 'دسته‌بندی با موفقیت حذف شد' })
}
