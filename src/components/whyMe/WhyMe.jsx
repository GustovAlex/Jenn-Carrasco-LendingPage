import './whyMe.css'
import icon7 from '../../assets/icon7.png'
import photo1 from '../../assets/photo1.png'

export default function WhyMe () {

	return (
		<div id="why me" className="whyMe">
			<h2 className="whyMeTitle">
				What Makes Mentorship With Me So Special?
			</h2>
			<div className="whyMeWrap">
				<div className="whyMeItemWrap">
					<div className="whyMeItem">
						<div>
							<img src={icon7} alt="icon7"/>
						</div>
						<div>
							<h3 className="whyMeItemTitle">
								IFBB Pro Competitor
							</h3>
							<p className="whyMeItemText">
								Lorem ipsum dolor sit amet, 
								consectetur adipiscing elit.
							</p>
						</div>
						
					</div>
					<div className="whyMeItem">
						<div>
							<img src={icon7} alt="icon7"/>
						</div>
						<div>
							<h3 className="whyMeItemTitle">
								20-Year Esthetician
							</h3>
							<p className="whyMeItemText">
								Lorem ipsum dolor sit amet, 
								consectetur adipiscing elit.
							</p>
						</div>						
					</div>
				</div>


				<div className="whyMePhotoWrap">
					<div className="whyMeFirstCircle"></div>
					<img className="whyMePhoto" src={photo1} alt="photo1"/>
					<div className="whyMeSecondCircle"></div>
					<div className="whyMeThirdCircle"></div>
				</div>


				<div className="whyMeItemWrap">
					<div className="whyMeItem">
						<div>
							<img src={icon7} alt="icon7"/>
						</div>						
						<div>
							<h3 className="whyMeItemTitle">
								Owner of Four Companies
							</h3>
							<p className="whyMeItemText">
								Lorem ipsum dolor sit amet, 
								consectetur adipiscing elit.
							</p>
						</div>
						
					</div>
					<div className="whyMeItem">
						<div>
							<img src={icon7} alt="icon7"/>
						</div>						
						<div>
							<h3 className="whyMeItemTitle">
								Mental Toughness Leader
							</h3>
							<p className="whyMeItemText">
								Lorem ipsum dolor sit amet, 
								consectetur adipiscing elit.
							</p>
						</div>						
					</div>
				</div>
			</div>
			<div className="whyMeButton">
				<span className="noselect">Contact Me Today</span>
			</div>
		</div>
	)
}