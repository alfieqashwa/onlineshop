import React from 'react'
import { Link } from 'gatsby'
import { FaAlignRight } from 'react-icons/fa'
// import logo from '../../static/img/images/logo.svg'

class Navbar extends React.Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <ul className="nav-links-logo">
            <Link to="/">
              {/* <img src={logo} alt="Al-Hadi Karpet" /> */}
              Al-hadi Karpet
            </Link>
            </ul>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
