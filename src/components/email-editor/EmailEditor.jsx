import { Bold, Eraser, Italic, Settings, Underline } from 'lucide-react'
import React, { useRef, useState } from 'react'
import EmailList from '../email-list/EmailList'
import style from './EmailEditor.module.scss'
import { applyStyle } from './apply-style'
const EmailEditor = () => {
	const inputRef = useRef(null)
	const [selectionStart, setSelectionStart] = useState(0)
	const [selectionEnd, setSelectionEnd] = useState(0)

	const updateSelection = () => {
		if (!inputRef.current) return
		setSelectionStart(inputRef.current.selectionStart)
		setSelectionEnd(inputRef.current.selectionEnd)
	}

	const [text, setText] = useState('')
	const [show, setShow] = useState(true)

	const applyFormat = type => {
		const selectedText = text.substring(selectionStart, selectionEnd)
		if (!selectedText) return
		const before = text.substring(0, selectionStart)
		const after = text.substring(selectionEnd)
		setText(before + applyStyle(type, selectedText) + after)
	}
	return (
		<div>
			<div className={style.wrapper}>
				<button className={style.showTools} onClick={() => setShow(!show)}>
					<Settings />
				</button>
				<h1>Email Editor</h1>
				<div>
					<textarea
						ref={inputRef}
						placeholder='Enter text..'
						className={style.editor}
						value={text}
						onChange={e => setText(e.target.value)}
						onSelect={updateSelection}
					></textarea>
				</div>
				{show ? (
					<div className={style.tools}>
						<button onClick={() => setText('')}>
							<Eraser />
						</button>
						<button onClick={() => applyFormat('bold')}>
							<Bold />
						</button>
						<button onClick={() => applyFormat('italic')}>
							<Italic />
						</button>
						<button onClick={() => applyFormat('underline')}>
							<Underline />
						</button>

						<button>Send now</button>
					</div>
				) : (
					''
				)}
			</div>
			{text && <EmailList text={text} />}
		</div>
	)
}

export default EmailEditor
