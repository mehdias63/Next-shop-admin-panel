'use client'

import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'
import { LanguageProvider } from '@/context/LanguageContext'

export default function Providers({ children }) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<LanguageProvider>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</LanguageProvider>
	)
}
