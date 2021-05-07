import './input.css'
import {useState, useEffect} from 'react'

export default function Input ({isClickConfirm, className, defaultValue}) {
	const [value, setValue] = useState(defaultValue)
	console.log("isClickConfirm", isClickConfirm)

	useEffect(() => {
		if(isClickConfirm) {
			setValue(defaultValue)
		}
	}, [isClickConfirm])

	const onChange = (event) => {
		setValue(event.target.value)
	}

	const onClick = () => {
		setValue(value !== defaultValue ? value : '')
	} 

	const onBlur = () => {
		setValue(value? value : defaultValue)
	}

	return (
		<div>
			<input className={className} 
			id="myInput" type="text" 
			value={value} 
			onClick={onClick} 
			onChange={onChange}
			onBlur={onBlur}
			/>
		</div>
	)
}