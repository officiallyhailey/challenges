function Header({ isDarkMode, searchTerm, onSearchChange, onToggleTheme }) {
  return (
    <header className='pageHeader'>
      <div className='topBar'>
        <div className='searchBar'>
          <div className='searchIcon'>
            <img src="./src/images/logo.svg" alt="Logo" className='searchIconImage' />
          </div>

          <input
            type='search'
            placeholder=''
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <button type='button' className='themeButton' aria-label='Toggle theme' onClick={onToggleTheme}>
            <img
              src={isDarkMode ? "./src/images/icon-sun.svg" : "./src/images/icon-moon.svg"}
              alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;