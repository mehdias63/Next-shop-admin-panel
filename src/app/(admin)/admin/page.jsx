'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function AdminHome() {
	const { t } = useLanguage()
	return (
		<div className="h-full w-full p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
				<div className="space-y-6">
					<h1 className="text-3xl font-bold text-gray-800">
						{t('adminWelcomeTitle')}
					</h1>
					<p className="text-gray-600 leading-7">
						{t('adminWelcomeDesc')}
					</p>
					<p className="text-gray-500 text-sm">
						{t('adminWelcomeStart')}
					</p>
				</div>
				<div className="flex justify-center">
					<Image
						src="/Dashboard.png"
						width={400}
						height={400}
						alt="admin dashboard"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</div>
	)
}
