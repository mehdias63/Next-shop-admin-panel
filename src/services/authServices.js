import { userProfile, users, findUserById } from '@/data/users'

const USER_KEY = 'next-shop-user-profile'

function getStoredProfile() {
	try {
		return JSON.parse(localStorage.getItem(USER_KEY) || 'null')
	} catch {
		return null
	}
}

function saveProfile(updates) {
	const current = getStoredProfile() || {}
	localStorage.setItem(USER_KEY, JSON.stringify({ ...current, ...updates }))
}

export function getOtp() {
	const code = Math.floor(100000 + Math.random() * 900000).toString()
	return Promise.resolve({ message: 'کد OTP ارسال شد', code })
}

export function checkOtp() {
	return Promise.resolve({ message: 'ورود موفق', user: { isActive: true } })
}

export function completeProfile({ name, email }) {
	saveProfile({ name, nameEn: name, email })
	return Promise.resolve({ message: 'پروفایل تکمیل شد' })
}

export function getUserProfile() {
	const stored = getStoredProfile()
	const user = stored ? { ...userProfile.user, ...stored } : userProfile.user
	return Promise.resolve({ ...userProfile, user })
}

export function updateProfile(formData) {
	saveProfile({ ...formData, nameEn: formData.name || '' })
	return Promise.resolve({ message: 'پروفایل با موفقیت بروزرسانی شد' })
}

export function logout() {
	try {
		localStorage.removeItem(USER_KEY)
	} catch {}
	return Promise.resolve()
}

export function getAllUsers() {
	return Promise.resolve({ users })
}

export function getUserById(id) {
	return Promise.resolve(findUserById(id) || users[0])
}
