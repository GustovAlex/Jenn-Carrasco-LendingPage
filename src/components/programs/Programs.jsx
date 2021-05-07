import './programs.css'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'
import photo from '../../assets/photo.png'

export default function Programs () {

	return (
		<div id="programs" className="programs">
			<div className="programsWrap">
				<div className="programsInfo">
					<h2 className="programsInfoTitle">
						Mentorship Programs For the Elite
					</h2>
					<p className="programsInfoText">
						I have three specialized programs that center around Life & Mindset, Fitness & Nutrition, <br/>
						and Business Mentorship. Additionally, I offer personalized one-on-one coaching. 
					</p>
					<div className="programsInfoItem">
						<div className="programsInfoItemIcon">
							<img className="programsInfoItemIconImg" src={icon4} alt="icon4"/>
						</div>					
						<div>
							<h3 className="programsInfoItemTitle">
								Life & Mindset Coaching:
							</h3>
							<p className="programsInfoItemText">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
								ad minim veniam.
							</p>
						</div>
					</div>
					<div className="programsInfoItem">
						<div className="programsInfoItemIcon">
							<img className="programsInfoItemIconImg" src={icon5} alt="icon5"/>
						</div>					
						<div>
							<h3 className="programsInfoItemTitle">
								Fitness & Nutrition:
							</h3>
							<p className="programsInfoItemText">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
								ad minim veniam.
							</p>
						</div>
					</div>
					<div className="programsInfoItem">
						<div className="programsInfoItemIcon">
							<img className="programsInfoItemIconImg" src={icon6} alt="icon6"/>
						</div>					
						<div>
							<h3 className="programsInfoItemTitle">
								Business Mentorship:
							</h3>
							<p className="programsInfoItemText">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>
								ad minim veniam.
							</p>
						</div>
					</div>
				</div>

				<div>
					<img className="programsPortret" src={photo} alt="photo"/>
				</div>
			</div>
		</div>
	)
}