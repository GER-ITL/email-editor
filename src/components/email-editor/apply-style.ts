export const applyStyle = (type: string, selectedText: any) => {
	let formattedText = selectedText

	switch (type) {
		case 'bold':
			formattedText = '<b>' + selectedText + '</b>'
			break
		case 'italic':
			formattedText = '<i>' + selectedText + '</i>'
			break
		case 'underline':
			formattedText = '<u>' + selectedText + '</u>'
			break
		default:
			formattedText = selectedText
	}
	return formattedText
}
