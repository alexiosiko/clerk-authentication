import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: "Threads",
	description: "A Next.js 13 MEta Threads Application"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<section className='main-container'>
						<div className='w-full max-w-xs'>
							{children}
						</div>
					</section>
				</body>
			</html>
		</ClerkProvider>
	)
}
