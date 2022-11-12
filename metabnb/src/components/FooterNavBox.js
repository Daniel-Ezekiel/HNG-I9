const FooterNavBox = ( {navTitle, navLinks} ) => {
  return (
    <div className="nav-links-box">
        <h4>{navTitle}</h4>

        <ul>
            {navLinks.map( (link, i) => <li key={i}><a href="/">{link}</a></li> )}
        </ul>
    </div>
  )
}

export default FooterNavBox