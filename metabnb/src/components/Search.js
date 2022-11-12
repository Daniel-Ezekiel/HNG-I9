const Search = ( {className, placeholder, btnName} ) => {
  return (
    <div className={className}>
        <input type="text" placeholder={placeholder} />
        <button id="btn__search" >{btnName}</button>
    </div>
  )
}

Search.defaultProps = {
  className: 'search-box',
  placeholder: 'Search for location',
  btnName: 'Search',
}

export default Search