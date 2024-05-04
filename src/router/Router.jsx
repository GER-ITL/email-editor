import { createBrowserRouter } from 'react-router-dom'
import EmailList from '../components/email-list/EmailList'
import App from '../pages/home/App'

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
export default router
