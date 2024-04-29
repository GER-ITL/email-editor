import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './styles/App.scss'
import viteLogo from '/vite.svg'
function App() {
	return (
		<>
			<div>
				<Link to='/next'>
					<a href='https://vitejs.dev' target='_blank'>
						<img src={viteLogo} className='logo' alt='Vite logo' />
					</a>
				</Link>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>
		</>
	)
}

export default App
