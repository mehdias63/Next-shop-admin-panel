import {
	addNewCoupon,
	deleteCoupon,
	getAllCoupons,
	getOneCoupon,
	updateCoupon,
} from '@/services/couponService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useLanguage } from '@/context/LanguageContext'
import { localizeCoupon } from '@/utils/localizeData'

export const useGetCoupons = () => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-coupons', lang],
		queryFn: getAllCoupons,
		retry: false,
		refetchOnWindowFocus: true,
		select: data => ({ coupons: data.coupons.map(c => localizeCoupon(c, lang)) }),
	})
}

export const useGetOneCoupon = id => {
	const { lang } = useLanguage()
	return useQuery({
		queryKey: ['get-coupon', id, lang],
		queryFn: () => getOneCoupon(id),
		retry: false,
		refetchOnWindowFocus: true,
		select: data => ({ coupon: localizeCoupon(data.coupon, lang) }),
	})
}

export const useAddNewCoupon = () =>
	useMutation({ mutationFn: addNewCoupon })

export const useUpdateCoupon = () =>
	useMutation({ mutationFn: updateCoupon })

export const useRemoveCoupon = () =>
	useMutation({ mutationFn: deleteCoupon })
