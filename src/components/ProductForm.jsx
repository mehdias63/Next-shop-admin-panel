'use client'

import Select from 'react-select'
import TextField from '@/ui/TextField'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function ProductForm({
	onSubmit,
	productData,
	productDataOnChange,
	categories,
	setSelectedCategory,
	isLoading,
	selectedCategory = '',
}) {
	const { t } = useLanguage()

	const productsFormData = [
		{ id: 1, label: t('title'), name: 'title' },
		{ id: 2, label: t('description'), name: 'description' },
		{ id: 3, label: t('slug'), name: 'slug' },
		{ id: 4, label: t('brand'), name: 'brand' },
		{ id: 5, label: t('price'), name: 'price' },
		{ id: 6, label: t('discount'), name: 'discount' },
		{ id: 7, label: t('priceWithDiscountForm'), name: 'offPrice' },
		{ id: 8, label: t('stock'), name: 'countInStock' },
		{ id: 9, label: t('productImageLink'), name: 'imageLink' },
	]

	return (
		<div className="max-w-sm">
			<form className="space-y-4" onSubmit={onSubmit}>
				{productsFormData.map(item => {
					return (
						<TextField
							key={item.id}
							label={item.label}
							name={item.name}
							value={productData[item.name] ?? ''}
							onChange={productDataOnChange}
						/>
					)
				})}
				<div>
					<label htmlFor="category" className="mb-2 block">
						{t('category')}
					</label>
					<Select
						id="category"
						onChange={setSelectedCategory}
						options={categories}
						getOptionLabel={option => option.title}
						getOptionValue={option => option._id}
						defaultValue={selectedCategory}
					/>
				</div>
				<div>
					{isLoading ? (
						<Loader />
					) : (
						<button className="btn-primary">{t('submit')}</button>
					)}
				</div>
			</form>
		</div>
	)
}
export default ProductForm
