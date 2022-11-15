import { Link } from "react-router-dom"

const FooterNavBox = ( {navTitle, navLinks} ) => {
  return (
    <div className="nav-links-box">
        <h4>{navTitle}</h4>

        <ul>
            {navLinks.map( (link, i) => <li key={i}><Link to="#">{link}</Link></li> )}
        </ul>
    </div>
  )
}

export default FooterNavBox