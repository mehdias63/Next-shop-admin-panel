'use client'

import { adminPaymentListTableTHeads } from '@/constants/tableHeads'
import { toLocalDateStringShort } from '@/utils/toLocalDate'
import { toPersianNumbersWithComma } from '@/utils/toPersianNumbers'
import Link from 'next/link'
import { HiEye } from 'react-icons/hi'
import { useLanguage } from '@/context/LanguageContext'

function PaymentListTable({ payments }) {
	const { lang, t, formatNumber } = useLanguage()
	return (
		<div className="overflow-x-auto my-8">
			<div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
				<table className="w-full text-sm text-gray-700">
					<thead className="bg-gray-50 text-gray-600 font-semibold text-sm">
						<tr>
							{adminPaymentListTableTHeads.map(item => (
								<th
									key={item.id}
									className="text-right px-4 py-3 whitespace-nowrap border-b"
								>
									{item.labelKey ? t(item.labelKey) : item.label}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{payments.map((payment, index) => (
							<tr
								key={payment._id}
								className="hover:bg-gray-50 transition duration-150"
							>
								<td className="px-4 py-3 border-b text-gray-700">
									{index + 1}
								</td>
								<td className="px-4 py-3 border-b font-semibold text-gray-900">
									{payment.invoiceNumber}
								</td>
								<td className="px-4 py-3 border-b max-w-[250px] truncate">
									{payment.description}
								</td>
								<td className="px-4 py-3 border-b">
									<div className="flex flex-col gap-y-1 text-xs">
										<span className="text-gray-800 font-medium">
											{payment.user.name}
										</span>
										<span>{payment.user.email}</span>
										<span className="font-semibold text-sm text-gray-600">
											{payment.user.phoneNumber}
										</span>
									</div>
								</td>
								<td className="px-4 py-3 border-b">
									<div className="flex flex-wrap gap-1">
										{payment.cart.productDetail.map(product => (
											<span
												key={product._id}
												className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full"
											>
												{product.title}
											</span>
										))}
									</div>
								</td>
								<td className="px-4 py-3 border-b font-bold text-gray-800">
									{formatNumber(payment.amount)}
								</td>
								<td className="px-4 py-3 border-b text-gray-600">
									{toLocalDateStringShort(payment.createdAt, lang)}
								</td>
								<td className="px-4 py-3 border-b">
									<span
										className={`px-2 py-1 rounded-full text-xs font-semibold ${
											payment.status === 'COMPLETED'
												? 'bg-green-100 text-green-600'
												: 'bg-red-100 text-red-600'
										}`}
									>
										{payment.status === 'COMPLETED'
											? t('success')
											: t('failed')}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default PaymentListTable
