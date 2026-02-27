'use client'
import { completeProfile } from '@/services/authServices'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import TextField from '../../ui/TextField'
import Loader from '../../ui/Loader'
import { useLanguage } from '@/context/LanguageContext'

function CompleteProfile() {
	const { t } = useLanguage()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const { isLoading, mutateAsync } = useMutation({
		mutationFn: completeProfile,
	})
	const router = useRouter()
	const queryClient = useQueryClient()

	const submitHandler = async e => {
		e.preventDefault()
		try {
			const { message } = await mutateAsync({ name, email })
			queryClient.invalidateQueries({ queryKey: ['get-user'] })
			toast.success(message)
			router.push('/')
		} catch (error) {
			toast.error(error?.response?.data?.message)
		}
	}
	return (
		<div className="flex justify-center">
			<div className="w-full sm:max-w-sm">
				<form className="space-y-8" onSubmit={submitHandler}>
					<TextField
						name="name"
						label={t('fullName')}
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<TextField
						name="email"
						label={t('email')}
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<div>
						{isLoading ? (
							<Loader />
						) : (
							<button type="submit" className="btn-primary">
								{t('submit')}
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	)
}
export default CompleteProfile
