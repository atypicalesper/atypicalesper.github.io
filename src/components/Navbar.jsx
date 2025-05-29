import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <NavLink to="/" className="emblem">/ˈtɑːruːn/</NavLink>
      </div>
      <div className="title">
        <span>Tarun Singh</span>
      </div>
      <div className="nav-items">
        <a className='nav-item bonus' href="https://atypicalesper.github.io/drumkit/">bonus</a>
        <NavLink 
          to="/about" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          about
        </NavLink>
        <NavLink 
          to="/work" 
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          work
        </NavLink>
        <NavLink 
          to="/" 
          end
          className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
        >
          intro
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;