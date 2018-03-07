import React from 'react';
import Link from 'gatsby-link';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: '0 auto', maxWidth: 650, padding: '0 1rem' }}>
    <header style={{ margin: '1rem 0 1.5rem 0' }}>
      <Link to='/' style={{ textShadow: 'none', backgroundImage: 'none' }}>
        <h3 style={{ display: 'inline' }}>My Sweet Site</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>

    {children()}

    <footer>
      <h4>Footer Links</h4>
      <ListLink to='/'>Home</ListLink>
      <ListLink to='/about'>About</ListLink>
      <ListLink to='/contact'>Contact</ListLink>
    </footer>
  </div>
);
