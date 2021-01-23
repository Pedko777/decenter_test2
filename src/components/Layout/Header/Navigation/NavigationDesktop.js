const NavigationDesktop = () => {
  return (
    <nav className="header__nav">
      <div className="header__nav-logo">
        <a href="#" className="link">
          Logo
        </a>
      </div>
      <div className="header__nav-bar">
        <ul className="header__nav-bar-list">
          <li className="header__nav-bar-list-item">
            <a href="#" className="link">
              помощь
            </a>
          </li>
          <li className="header__nav-bar-list-item">
            <a href="#" className="link">
              новости
            </a>
          </li>
          <li className="header__nav-bar-list-item">
            <a href="#" className="link">
              комьюнити
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationDesktop;
