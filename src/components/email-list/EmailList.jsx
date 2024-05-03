import parse from 'html-react-parser'
import React from 'react'
import styles from './EmailList.module.scss'

const EmailList = ({ text }) => {
	return (
		<div>
			<h1>preview</h1>
			<div className={styles.list}>{parse(text)}</div>
		</div>
	)
}

export default EmailList
