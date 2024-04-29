import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed root')
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
	},
	{
		path: '/next',
		element: '',
	},
])
ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
