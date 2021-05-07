import {useState} from 'react'
import './buttonUpToTop.css'
import upArrow from '../../assets/up-arrow.png'
import ScrollToTop from "react-scroll-to-top"

export default function ButtonUpToTop () {

	const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  }

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className="buttonDisplayNone">
        <div className="buttonUpToTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none'}}>
		      <img className="buttonUpToTopImg" src={upArrow} alt="upArrow"  onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
	    </div>
    </div>
	
  )
}