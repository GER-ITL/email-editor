import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import FormHolder from './components/FormHolder'
import './styles/index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>404</div>,
	},
	{
		path: '/next',
		element: <FormHolder />,
	},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
