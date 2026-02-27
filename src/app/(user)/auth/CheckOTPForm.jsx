'use client'

import OTPInput from 'react-otp-input'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { CiEdit } from 'react-icons/ci'
import { useLanguage } from '@/context/LanguageContext'

function CheckOTPForm({
	onSubmit,
	otp,
	setOtp,
	onBack,
	time,
	onResendOtp,
	generatedCode,
}) {
	const { t } = useLanguage()

	return (
		<div>
			<button onClick={onBack} className="mb-4">
				<HiArrowNarrowRight className="w-6 h-6" />
			</button>
			<button onClick={onBack} className="mb-4 mr-2">
				<CiEdit className="w-6 h-6 text-gray-700" />
			</button>

			{generatedCode && (
				<div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
					<p className="text-sm text-gray-500 mb-1">{t('yourVerificationCode')}</p>
					<p className="text-3xl font-bold tracking-widest text-blue-700">
						{generatedCode}
					</p>
				</div>
			)}

			<div className="mb-4 text-secondary-500">
				{time > 0 ? (
					<p>{t('secondsUntilResend', time)}</p>
				) : (
					<button onClick={onResendOtp}>{t('resendCode')}</button>
				)}
			</div>
			<form className="space-y-10" onSubmit={onSubmit}>
				<p className="font-bold">{t('enterVerificationCode')}</p>
				<OTPInput
					value={otp}
					onChange={setOtp}
					numInputs={6}
					renderSeparator={<span>-</span>}
					inputStyle={{
						width: '2.5rem',
						padding: '0.5rem 0.2rem',
						border: '1px solid gray',
						borderRadius: '0.5rem',
					}}
					containerStyle="flex flex-row-reverse gap-x-2 justify-center"
					renderInput={props => <input type="number" {...props} />}
				/>
				<div>
					<button type="submit" className="btn-primary">
						{t('submit')}
					</button>
				</div>
			</form>
		</div>
	)
}

export default CheckOTPForm
