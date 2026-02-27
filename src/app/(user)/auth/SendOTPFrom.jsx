'use client'

import Loader from '../../ui/Loader'
import TextField from '../../ui/TextField'
import { useLanguage } from '@/context/LanguageContext'

function SendOTPFrom({ phoneNumber, onChange, onSubmit, isLoading }) {
	const { t } = useLanguage()

	return (
		<div className="flex items-center justify-center">
			<form
				className="space-y-10 lg:max-w-xl w-full"
				onSubmit={onSubmit}
			>
				<TextField
					label={t('mobileNumber')}
					name="phoneNumber"
					value={phoneNumber}
					onChange={onChange}
				/>
				<div>
					{isLoading ? (
						<Loader />
					) : (
						<button type="submit" className="btn-primary">
							{t('sendVerificationCode')}
						</button>
					)}
				</div>
			</form>
		</div>
	)
}

export default SendOTPFrom
