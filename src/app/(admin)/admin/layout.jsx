import AdminSideBar from './AdminSideBar'

export const metadata = {
	title: 'پروفایل ادمین',
	description: 'پروفایل ادمین',
}

export default function RootLayout({ children }) {
	return (
		<div className="grid grid-cols-5 bg-white h-screen">
			<div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
				<AdminSideBar />
			</div>
			<div className="col-span-4 overflow-y-auto p-4">
				{children}
			</div>
		</div>
	)
}
