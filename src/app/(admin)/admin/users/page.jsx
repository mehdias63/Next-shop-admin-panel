'use client'

import { useGetUsers } from '@/hooks/useAuth'
import UsersTable from './UsersTable'
import Loader from '@/ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function UsersPage() {
	const { isLoading, data } = useGetUsers()
	const { users } = data || {}
	const { t } = useLanguage()

	if (isLoading) return <Loader />
	return (
		<div>
			<h1 className="text-xl font-bold mb-5">{t('usersInfo')}</h1>
			<UsersTable users={users} />
		</div>
	)
}
export default UsersPage
