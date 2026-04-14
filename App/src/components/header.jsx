import logo from '../images/logo.svg'
import iconSun from '../images/icon-sun.svg'
import iconMoon from '../images/icon-moon.svg'

function Header({ isDarkMode, searchTerm, onSearchChange, onToggleTheme }) {
  return (
    <header className='pageHeader'>
      <div className='topBar'>
        <div className='searchBar'>
          <div className='searchIcon'>
            <img src={logo} alt="Logo" className='searchIconImage' />
          </div>

          <input
            type='search'
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <button type='button' className='themeButton' aria-label='Toggle theme' onClick={onToggleTheme}>
            <img
              src={isDarkMode ? iconSun : iconMoon}
              alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;