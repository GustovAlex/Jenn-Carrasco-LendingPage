import AboutTopInfo from './AboutTopInfo'
import './about.css'
import portret2 from '../../assets/portret2.png'

export default function About () {

	return (
		<div id="about" >
			<AboutTopInfo />
			<div className="aboutContent">
			
				<h3 className="aboutContentInfoTitleTop">
						About Jenn
				</h3>
				
				<div className="aboutContentImgWrap">
					<img className="aboutContentImg" src={portret2} alt="portret2"/>
				</div>
				<div className="aboutContentInfo">
					<h3 className="aboutContentInfoTitle">
						About Jenn
					</h3>
					<p className="aboutContentInfoText">
						I am going to let you in on a big secret… You’ve been lied to.
					</p>
					<p className="aboutContentInfoText">
						You have been told and conditioned to believe that your best years are behind you.
						That it is okay to slow down. That it’s normal to feel worse and do less the older you get.
					</p>
					<p className="aboutContentInfoText">
						But here’s the thing, you aren’t limited by your body, you are limited by your mind.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. 
					</p>
					<div className="aboutContentButton">
						<span className="noselect">Read My Story</span>
					</div>
					
				</div>
			</div>
		</div>
	)
}