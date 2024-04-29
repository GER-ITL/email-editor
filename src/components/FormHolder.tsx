import { memo } from 'react'

const initialFormHolder = ({ propsHolder, setPropsHolder }: any) => {
	return (
		<div>
			<h1>{propsHolder.textHolder}</h1>
			<button
				onClick={() => {
					setPropsHolder((prev: any) => {
						return {
							...prev,
							textHolder: prev.textHolder + propsHolder.value,
						}
					})
				}}
			>
				Change
			</button>
		</div>
	)
}
export const FormHolder = memo(initialFormHolder)

export default FormHolder
