import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Provider from './provider'
import router from './router/Router'
import './styles/index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed root')

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
