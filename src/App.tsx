import { useState } from 'react'
import FormHolder from './components/FormHolder'

function App() {
	const [propsHolder, setPropsHolder] = useState({
		textHolder: 'Holder',
		value: '...',
	})
	return (
		<>
			<div>
				<h1>Email EDITOR</h1>
				<FormHolder propsHolder={propsHolder} setPropsHolder={setPropsHolder} />
			</div>
		</>
	)
}

export default App
