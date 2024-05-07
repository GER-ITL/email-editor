import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import EmailList from './components/email-list/EmailList'
import App from './pages/home/App'
import Provider from './provider'
import './styles/index.scss'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1>ERROR 404</h1>,
	},
	{
		path: '/messages',
		element: <EmailList />,
	},
])

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed root')

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<Provider>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
