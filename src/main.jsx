import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './pages/home/App'
import './styles/index.scss'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed root')
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>ERROR 404</h1>,
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
