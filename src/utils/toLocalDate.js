export function toLocalDateString(date, lang = 'fa') {
	const locale = lang === 'en' ? 'en-US' : 'fa-IR'
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	return new Date(date).toLocaleDateString(locale, options)
}

export function toLocalDateStringShort(date, lang = 'fa') {
	const locale = lang === 'en' ? 'en-US' : 'fa-IR'
	return new Date(date).toLocaleDateString(locale)
}
