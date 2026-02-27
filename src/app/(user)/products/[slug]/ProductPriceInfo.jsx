'use client'

import { useLanguage } from '@/context/LanguageContext'

function ProductPriceInfo({ title, titleEn, description, descriptionEn, price, discount, offPrice }) {
	const { lang, t, formatNumber } = useLanguage()
	const displayTitle = lang === 'en' ? (titleEn || title) : title
	const displayDescription = lang === 'en' ? (descriptionEn || description) : description

	return (
		<>
			{displayTitle && <h1 className="font-bold text-2xl mb-6">{displayTitle}</h1>}
			{displayDescription && <p className="mb-6">{displayDescription}</p>}
			<p className="mb-6">
				{t('productPrice')} :{' '}
				<span
					className={`${discount ? 'line-through' : 'font-bold'}`}
				>
					{formatNumber(price)}
				</span>
			</p>
			{!!discount && (
				<div className="flex items-center gap-x-2 mb-6">
					<p className="text-xl font-bold">
						{t('productPriceWithDiscount')} :{' '}
						{formatNumber(offPrice)}
					</p>
					<div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
						{formatNumber(discount)} %
					</div>
				</div>
			)}
		</>
	)
}
export default ProductPriceInfo
