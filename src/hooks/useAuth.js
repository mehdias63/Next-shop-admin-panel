import {
	getAllUsers,
	getUserProfile,
	getUserById,
} from '@/services/authServices'
import { useQuery } from '@tanstack/react-query'
import { useLanguage } from '@/context/LanguageContext'
import { localizeUserProfile, localizeUser } from '@/utils/localizeData'

export const useGetUser = () => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-user', lang],
		queryFn: getUserProfile,
		retry: false,
		refetchOnWindowFocus: true,
		select: data => localizeUserProfile(data, lang),
	})
}

export const useGetUsers = () => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-users', lang],
		queryFn: getAllUsers,
		retry: false,
		refetchOnWindowFocus: true,
		select: data => ({ users: data.users.map(u => localizeUser(u, lang)) }),
	})
}

export const useGetUserById = id =>
	useQuery({
		queryKey: ['user', id],
		queryFn: () => getUserById(id),
		enabled: !!id,
	})
