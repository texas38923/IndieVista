import { Component } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems';
import './NavbarStyles.css';

//class component for the Navbar , (render needs to be used with class components):
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Trippyy</h1>

        <div className='menu-icons' onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {menuItems.map((item, ind) => {
            return (
              <li key={ind}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
