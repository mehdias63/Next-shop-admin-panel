'use client'

import RadioInput from '@/ui/RadioInput'
import TextField from '@/ui/TextField'
import Select from 'react-select'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function CouponForm({
	formData,
	onSubmit,
	onFormChange,
	type,
	setType,
	options,
	onChangeSelect,
	expireDate,
	setExpireDate,
	isLoading,
	defaultValue = '',
}) {
	const { t, lang } = useLanguage()

	return (
		<div className="max-w-sm">
			<form className="space-y-4" onSubmit={onSubmit}>
				<TextField
					label={t('code')}
					name="code"
					value={formData.code || ''}
					onChange={onFormChange}
				/>
				<TextField
					label={t('amount')}
					name="amount"
					value={formData.amount || ''}
					onChange={onFormChange}
				/>
				<TextField
					label={t('capacity')}
					name="usageLimit"
					value={formData.usageLimit || ''}
					onChange={onFormChange}
				/>
				<div>
					<span className="mb-2 block">{t('discountCodeType')}</span>
					<div className="flex items-center justify-between">
						<RadioInput
							checked={type === 'percent'}
							id="percent-type"
							name="type"
							label={t('percent')}
							value="percent"
							onChange={e => setType(e.target.value)}
						/>
						<RadioInput
							checked={type === 'fixedProduct'}
							id="fixedProduct-type"
							name="type"
							label={t('fixedPrice')}
							value="fixedProduct"
							onChange={e => setType(e.target.value)}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="products" className="mb-2 block">
						{t('includesProducts')}
					</label>
					<Select
						instanceId="products"
						isMulti
						onChange={onChangeSelect}
						options={options}
						getOptionLabel={option => option.title}
						getOptionValue={option => option._id}
						defaultValue={defaultValue}
					/>
				</div>
				<div>
					<span className="mb-2 block">{t('expiryDate')}</span>
					<DatePicker
						inputClass="textField__input w-[330px]"
						value={expireDate}
						format="YYYY/MM/DD"
						calendar={lang === 'fa' ? persian : undefined}
						locale={lang === 'fa' ? persian_fa : undefined}
						calendarPosition="bottom-left"
						onChange={date => setExpireDate(date)}
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
export default CouponForm
