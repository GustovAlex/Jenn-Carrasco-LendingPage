import {useState} from 'react'
import './contacts.css'
import Input from './Input'

export default function Contacts () {
	const [isClickConfirm, setIsClickConfirm] = useState(false)

	const onClickResetInputs = () => {
		setIsClickConfirm(true)
	}

	return (
		<div id="contact" className="contacts">
			<div className="contactsWrap">
				<h2 className="contatsTitle">
					Contact Me Today for an Introductory CalL
				</h2>

				<div>
					<div className="contactsInputeItem">
						<Input isClickConfirm={isClickConfirm} 
						className="input" 
						defaultValue="Full Name"/>
						<Input isClickConfirm={isClickConfirm}
						className="input"
						defaultValue="Email Address"/>
					</div>
					<div className="contactsInputeItem">
						<Input isClickConfirm={isClickConfirm}
						className="input" 
						defaultValue="Phone"/>
						<Input isClickConfirm={isClickConfirm} 
						className="input" 
						defaultValue="City"/>
					</div>
					
					<Input isClickConfirm={isClickConfirm} 
					className="inputMessage" 
					defaultValue="Message"/>
				</div>
				<div className="contactsButton" onClick={onClickResetInputs}>
				confirm
				</div>
			</div>			
		</div>
	)
}