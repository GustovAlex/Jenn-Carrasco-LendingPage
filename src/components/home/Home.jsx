import {useState} from 'react'
import './home.css'
import Navbar from './Navbar'


export default function Home () {

	const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false)

	const onClickSetIsActiveMenu = () => {
		setIsActiveBurgerMenu(!isActiveBurgerMenu)	
	}

	return (
		<div className="home" onClick={isActiveBurgerMenu ? onClickSetIsActiveMenu : null}>
			<div className="homeSecondBackground">
				<Navbar isActiveBurgerMenu={isActiveBurgerMenu}
				onClickSetIsActiveMenu={onClickSetIsActiveMenu}
				 />
				<div className="homeInfo" >
					<h1 className="homeTitle">
						Mindset, Fitness, Nutrition &
					</h1>
					<p className="homeText">
						Life Mentorship for the Elite
					</p>
				</div>
				<div>
					<a className="homeButton" href="#contact">
						contact me today!
					</a>
				</div>
			</div>	
		</div>
	)
}