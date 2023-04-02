import React from 'react'
import { inject } from '@vercel/analytics'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { router } from './routes'
import { NotificationProvider } from './providers/Notifications'
import { HelmetProvider } from 'react-helmet-async'

// Initialize analytics
inject()

function App() {
	return (
		<HelmetProvider>
			<NotificationProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</NotificationProvider>
		</HelmetProvider>
	)
}

export default App
