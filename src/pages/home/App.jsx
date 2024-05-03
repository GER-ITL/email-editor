import { useState } from 'react'
import EmailEditor from '../../components/email-editor/EmailEditor'

function App() {
	const [propsHolder, setPropsHolder] = useState({
		textHolder: 'Holder',
		value: '...',
	})
	return (
		<>
			<div>
				<EmailEditor />
				{/* <FormHolder propsHolder={propsHolder} setPropsHolder={setPropsHolder} /> */}
			</div>
		</>
	)
}

export default App
