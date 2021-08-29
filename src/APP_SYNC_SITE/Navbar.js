import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { createGlobalContext } from './ContextGlobal';

const Navbar = () => {
  const { userItem } = useContext(createGlobalContext);


  return (
    <div className="navbar-section">
      <nav className="navbar shadow navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">GraphQL-React</Link>
          <section className="cart-btn">
            <Link to='/checkout'>
              <article className="cart-icon">
                <i className="fas fa-shopping-bag"></i><span className="cart-count bg-danger text-white text-center">{userItem.length}</span>
              </article>
            </Link>
          </section>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;