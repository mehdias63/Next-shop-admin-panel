import {
	addNewCategory,
	getCategories,
	getCategoryById,
	removeCategory,
	updateCategory,
} from '@/services/categoryService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useLanguage } from '@/context/LanguageContext'
import { localizeCategory } from '@/utils/localizeData'

export const useGetCategories = () => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-categories', lang],
		queryFn: getCategories,
		retry: false,
		refetchOnWindowFocus: true,
		select: data => ({ categories: data.categories.map(c => localizeCategory(c, lang)) }),
	})
}

export const useGetCategoryById = id => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-category', id, lang],
		queryFn: () => getCategoryById(id),
		retry: false,
		refetchOnWindowFocus: true,
		select: data => ({ category: localizeCategory(data.category, lang) }),
	})
}

export const useAddCategory = () =>
	useMutation({ mutationFn: addNewCategory })

export const useUpdateCategory = () =>
	useMutation({ mutationFn: updateCategory })

export const useRemoveCategory = () => {
	return useMutation({ mutationFn: removeCategory })
}
