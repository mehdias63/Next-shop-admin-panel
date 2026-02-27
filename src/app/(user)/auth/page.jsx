'use client'
import { useEffect, useState } from 'react'
import SendOTPFrom from './SendOTPFrom'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { getOtp } from '@/services/authServices'
import CheckOTPForm from './CheckOTPForm'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

const RESEND_TIME = 90

function Authpage() {
	const [phoneNumber, setPhoneNumber] = useState('')
	const [step, setStep] = useState(1)
	const [time, setTime] = useState(RESEND_TIME)
	const [otp, setOtp] = useState('')
	const [generatedCode, setGeneratedCode] = useState('')
	const router = useRouter()
	const { t } = useLanguage()

	const { isLoading, mutateAsync: mutateGetOtp } = useMutation({
		mutationFn: getOtp,
	})

	const phoneNumberHandler = e => {
		setPhoneNumber(e.target.value)
	}

	const sendOtpHandler = async e => {
		e.preventDefault()
		try {
			const data = await mutateGetOtp({ phoneNumber })
			setGeneratedCode(data.code)
			setStep(2)
			setTime(RESEND_TIME)
			setOtp('')
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}

	const checkOtpHandler = e => {
		e.preventDefault()
		if (otp === generatedCode) {
			toast.success(t('loginSuccess'))
			router.push('/complete-profile')
		} else {
			toast.error(t('invalidCode'))
		}
	}

	useEffect(() => {
		const timer =
			time > 0 && setInterval(() => setTime(t => t - 1), 1000)
		return () => {
			if (timer) clearInterval(timer)
		}
	}, [time])

	const renderSteps = () => {
		switch (step) {
			case 1:
				return (
					<SendOTPFrom
						phoneNumber={phoneNumber}
						onChange={phoneNumberHandler}
						onSubmit={sendOtpHandler}
						isLoading={isLoading}
					/>
				)
			case 2:
				return (
					<CheckOTPForm
						onBack={() => setStep(s => s - 1)}
						otp={otp}
						setOtp={setOtp}
						onSubmit={checkOtpHandler}
						time={time}
						onResendOtp={sendOtpHandler}
						generatedCode={generatedCode}
					/>
				)
			default:
				return null
		}
	}

	return (
		<div className="flex justify-center">
			<div className="w-full sm:max-w-sm">{renderSteps()}</div>
		</div>
	)
}

export default Authpage
