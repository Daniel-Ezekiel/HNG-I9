const FooterNavBox = ( {navTitle, navLinks} ) => {
  return (
    <div className="nav-links-box">
        <h4>{navTitle}</h4>

        <ul>
            {navLinks.map( (link) => <li><a href="/">{link}</a></li> )}
        </ul>
    </div>
  )
}

export default FooterNavBox