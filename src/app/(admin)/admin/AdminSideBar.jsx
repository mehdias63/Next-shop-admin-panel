'use client'

import { logout } from '@/services/authServices'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

function AdminSideBar() {
	const { t } = useLanguage()

	const logoutHandler = async () => {
		await logout()
		document.location.href = '/'
	}

	return (
		<div>
			<ul className="flex flex-col space-y-8">
				<li>
					<Link href="/" className="link-li">
						{t('home')}
					</Link>
				</li>
				<li>
					<Link href="/admin" className="link-li">
						{t('dashboard')}
					</Link>
				</li>
				<li>
					<Link href="/admin/users" className="link-li">
						{t('users')}
					</Link>
				</li>
				<li>
					<Link href="/admin/products" className="link-li">
						{t('products')}
					</Link>
				</li>
				<li>
					<Link href="/admin/categories" className="link-li">
						{t('categories')}
					</Link>
				</li>
				<li>
					<Link href="/admin/payments" className="link-li">
						{t('orders')}
					</Link>
				</li>
				<li>
					<Link href="/admin/coupons" className="link-li">
						{t('discountCodes')}
					</Link>
				</li>
				<li>
					<button
						onClick={logoutHandler}
						className="link-li cursor-pointer"
					>
						{t('logout')}
					</button>
				</li>
			</ul>
		</div>
	)
}
export default AdminSideBar
