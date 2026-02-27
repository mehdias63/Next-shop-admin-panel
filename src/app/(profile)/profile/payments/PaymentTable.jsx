'use client'

import { userPaymentTHeads } from '@/constants/tableHeads'
import { toLocalDateStringShort } from '@/utils/toLocalDate'
import { useLanguage } from '@/context/LanguageContext'

function PaymentTable({ payments }) {
	const { lang, t, formatNumber } = useLanguage()
	return (
		<div className="shadow-sm overflow-auto my-8">
			<table className="border-collapse table-auto w-full min-w-[800px] text-sm">
				<thead>
					<tr>
						{userPaymentTHeads.map(item => {
							return (
								<th
									className="whitespace-nowrap table__th"
									key={item.id}
								>
									{item.labelKey ? t(item.labelKey) : item.label}
								</th>
							)
						})}
					</tr>
				</thead>
				<tbody>
					{payments.map((payment, index) => {
						return (
							<tr key={payment._id}>
								<td className="table__td">{index}</td>
								<td className="table__td  whitespace-nowrap truncate">
									{payment.invoiceNumber}
								</td>
								<td className="table__td  max-w-[280px] whitespace-nowrap truncate">
									{payment.description}
								</td>
								<td className="table__td">
									<div className="flex flex-col gap-y-2 items-start">
										{payment.cart.productDetail.map(product => {
											return (
												<span
													className="badge badge--secondary"
													key={product._id}
												>
													{product.title}
												</span>
											)
										})}
									</div>
								</td>
								<td className="table__td font-bold text-lg">
									{formatNumber(payment.amount)}
								</td>
								<td className="table__td">
									{toLocalDateStringShort(payment.createdAt, lang)}
								</td>
								<td className="table__td">
									{payment.status === 'COMPLETED' ? (
										<span className="badge badge--success">{t('success')}</span>
									) : (
										<span className="badge badge--error">{t('failed')}</span>
									)}
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
export default PaymentTable
