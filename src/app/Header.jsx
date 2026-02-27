'use client'

import { useGetUser } from '@/hooks/useAuth'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

function Header() {
	const { data, error, isLoading } = useGetUser()
	const { user, cart } = data || {}
	const { lang, setLang, t } = useLanguage()

	return (
		<header
			className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 mb-20 ${
				isLoading ? 'blur-sm opacity-70' : 'opacity-100 blur-0'
			}`}
		>
			<nav className="container xl:max-w-screen-xl mx-auto">
				<ul className="flex items-center justify-between py-4 px-4 md:px-6 text-sm md:text-base font-medium text-gray-700">
					<li>
						<Link href="/" className="link-li">
							{t('home')}
						</Link>
					</li>
					<li>
						<Link href="/products" className="link-li">
							{t('products')}
						</Link>
					</li>
					<li>
						<Link href="/profile" className="link-li">
							{t('userPanel')}
						</Link>
					</li>
					<li>
						<Link href="/admin" className="link-li">
							{t('adminPanel')}
						</Link>
					</li>
					<li>
						<Link href="/cart" className="link-li">
							{t('cart')} ({cart ? cart.productDetail.length : 0})
						</Link>
					</li>

					{user ? (
						<span className="text-xs md:text-sm text-blue-700 px-4 py-2 bg-blue-100 rounded-lg">
							{user.name}
						</span>
					) : (
						<li>
							<Link href="/auth" className="link-li">
								{t('login')}
							</Link>
						</li>
					)}

					<li>
						<button
							onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
							className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-100 transition-colors font-mono"
						>
							{lang === 'fa' ? 'EN' : 'FA'}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}
export default Header
