import parse from 'html-react-parser'
import React from 'react'
import styles from './PrevList.module.scss'

const PrevList = ({ text }) => {
	return (
		<div>
			<h1>preview</h1>
			<div className={styles.list}>{parse(text)}</div>
		</div>
	)
}

export default PrevList
