'use client'

import { logout } from '@/services/authServices'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

function SideBar() {
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
					<Link href="/profile" className="link-li">
						{t('dashboard')}
					</Link>
				</li>
				<li>
					<Link href="/profile/me" className="link-li">
						{t('userInfoTitle')}
					</Link>
				</li>
				<li>
					<Link href="/profile/payments" className="link-li">
						{t('userOrders')}
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
export default SideBar
