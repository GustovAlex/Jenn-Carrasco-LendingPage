import './footer.css'
import socialIcon1 from '../../assets/socialIcon1.png'
import socialIcon2 from '../../assets/socialIcon2.png'
import socialIcon3 from '../../assets/socialIcon3.png'

export default function Footer () {

	const socialList = [socialIcon1, socialIcon2, socialIcon3]

	return (
		<div className="footer">
			<div className="footerWrap">
				<a className="footerMenu" href="#home">Home</a>
				<span>/</span>
				<a className="footerMenu" href="#about">About</a>
				<span>/</span>
				<a className="footerMenu" href="#programs">Programs</a>
				<span>/</span>
				<a className="footerMenu" href="#why me">Why me</a>
				<span>/</span>
				<a className="footerMenu" href="#contact">Contact</a>
			</div>
			<div className="footerIcons">
				{socialList.map((icon) => <img src={icon} key={icon} alt="socialIcon"/>)}
			</div>
		</div>
	)
}