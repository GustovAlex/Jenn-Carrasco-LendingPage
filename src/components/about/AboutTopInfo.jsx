import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import './aboutTopInfo.css'

export default function AboutTopInfo() {

	return (
		<div className="aboutTopInfo">
			
			<div className="aboutTopInfoItems">
				<div className="aboutTopInfoImgWrap">
					<img className="aboutTopInfoImg" src={icon1} alt="icon"/>
				</div>
				<h2 className="aboutTopInfoTitle">
					Personalized Fitness & <br/>
					Nutrition Coaching
				</h2>
			</div>
			<div className="aboutTopInfoItems">
				<div className="aboutTopInfoImgWrap">
					<img className="aboutTopInfoImg" src={icon2} alt="icon"/>
				</div>
				
				<h2 className="aboutTopInfoTitle">
					Mental Toughness <br/>
					Accountability 
				</h2>
			</div>
			<div className="aboutTopInfoItems">
				<div className="aboutTopInfoImgWrap">
					<img className="aboutTopInfoImg" src={icon3} alt="icon"/>
				</div>
				<h2 className="aboutTopInfoTitle">
					Business & <br/>
					Life Mentorship
				</h2>
			</div>
		</div>
	)
}