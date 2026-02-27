'use client'

import Select from 'react-select'
import TextField from '@/ui/TextField'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

export const categoryTypes = [
	{ id: 1, labelKey: 'categoryTypeProduct', value: 'product' },
	{ id: 2, labelKey: 'categoryTypePost', value: 'post' },
	{ id: 3, labelKey: 'categoryTypeTicket', value: 'ticket' },
	{ id: 4, labelKey: 'categoryTypeComments', value: 'comment' },
]

function CategoryForm({
	onSubmit,
	category,
	handleChange,
	selectedType = '',
	setSelectedType,
	isLoading,
}) {
	const { t } = useLanguage()

	return (
		<div className="max-w-sm mb-10">
			<form className="space-y-4" onSubmit={onSubmit}>
				<TextField
					name="title"
					label={t('title')}
					value={category.title || ''}
					onChange={handleChange}
				/>
				<TextField
					name="englishTitle"
					label={t('englishTitleLabel')}
					value={category.englishTitle || ''}
					onChange={handleChange}
				/>
				<TextField
					name="description"
					label={t('description')}
					value={category.description || ''}
					onChange={handleChange}
				/>
				<div>
					<label htmlFor="type" className="mb-2 block">
						{t('type')}
					</label>
					<Select
						instanceId="type"
						onChange={setSelectedType}
						options={categoryTypes}
						getOptionLabel={option => t(option.labelKey)}
						defaultValue={selectedType}
					/>
				</div>
				<div className="mt-2">
					{isLoading ? (
						<Loader />
					) : (
						<button className="btn-primary mt-6">{t('submit')}</button>
					)}
				</div>
			</form>
		</div>
	)
}
export default CategoryForm
