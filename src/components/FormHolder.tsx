import axios from 'axios'
import { useEffect } from 'react'

const FormHolder = () => {
	useEffect(() => {
		const getData = async () => {
			await axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then(response => {
					const data = response.data
					console.log(data)
				})
		}
		getData()
	}, [])
	return (
		<div>
			<h1>Holder</h1>
		</div>
	)
}

export default FormHolder
