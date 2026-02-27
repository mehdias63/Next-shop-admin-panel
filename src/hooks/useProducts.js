import {
	addProduct,
	getOneProductById,
	getProducts,
	removeProduct,
	updateProduct,
} from '@/services/productService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useLanguage } from '@/context/LanguageContext'
import { localizeProduct } from '@/utils/localizeData'

export const useGetProducts = () => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-products', lang],
		queryFn: getProducts,
		retry: false,
		refetchOnWindowFocus: true,
		select: data => ({ products: data.products.map(p => localizeProduct(p, lang)) }),
	})
}

export const useAddProduct = () => {
	return useMutation({ mutationFn: addProduct })
}

export const useUpdateProduct = () => {
	return useMutation({ mutationFn: updateProduct })
}

export const useRemoveProduct = () => {
	return useMutation({ mutationFn: removeProduct })
}

export const useGetProductById = id => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-product', id, lang],
		queryFn: () => getOneProductById(id),
		retry: false,
		refetchOnWindowFocus: true,
		select: data => ({ product: localizeProduct(data.product, lang) }),
	})
}
