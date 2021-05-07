
import './home.css'
import cancel from '../../assets/cancel.svg'

export default function Navbar ({isActiveBurgerMenu, onClickSetIsActiveMenu}) {
	const menuItems = [
		{class: "navbarMenuItem", burgerClass: "navbarMenuItemBurger", href: "#home", name: "Home"},
		{class: "navbarMenuItem", burgerClass: "navbarMenuItemBurger", href: "#about", name: "About"},
		{class: "navbarMenuItem", burgerClass: "navbarMenuItemBurger", href: "#programs", name: "Programs"},
		{class: "navbarMenuItem", burgerClass: "navbarMenuItemBurger", href: "#why me", name: "Why me"},
		{class: "navbarMenuItem", burgerClass: "navbarMenuItemBurger", href: "#contact", name: "Contact"}
	]



	return (
		<div className="navbar">
			<div className="navbarLogo">
				Jenn Carrasco
			</div>
			<div className="navbarMenu" onClick={(e) => e.stopPropagation()}>
				{isActiveBurgerMenu ? <img className="iconCloseBurgerMenu" onClick={onClickSetIsActiveMenu} src={cancel} alt="cancel" /> : null}
				{menuItems.map((item) => <a 
				className={isActiveBurgerMenu ? item.burgerClass : item.class}
				onClick={onClickSetIsActiveMenu}
				href={item.href}
				key={item.name}>
					{item.name}
				</a>)}
			</div>
			<div className={isActiveBurgerMenu ? "burgerBtnNotVisible" : "burgerBtn"} onClick={onClickSetIsActiveMenu}>
				<span/>
			</div>
		</div>
	)
}