'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import fa from '@/locales/fa'
import en from '@/locales/en'

const LanguageContext = createContext({
	lang: 'fa',
	setLang: () => {},
	t: key => key,
	formatNumber: n => n?.toLocaleString() ?? '',
})

export function LanguageProvider({ children }) {
	const [lang, setLang] = useState('fa')

	useEffect(() => {
		const saved = localStorage.getItem('lang') || 'fa'
		setLang(saved)
	}, [])

	useEffect(() => {
		localStorage.setItem('lang', lang)
		document.documentElement.lang = lang
		document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
	}, [lang])

	const translations = lang === 'fa' ? fa : en

	const t = (key, ...args) => {
		const val = translations[key]
		if (typeof val === 'function') return val(...args)
		return val ?? key
	}

	const formatNumber = n => {
		if (n == null) return ''
		return lang === 'fa'
			? n.toLocaleString('fa-IR')
			: n.toLocaleString('en-US')
	}

	return (
		<LanguageContext.Provider value={{ lang, setLang, t, formatNumber }}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	return useContext(LanguageContext)
}
