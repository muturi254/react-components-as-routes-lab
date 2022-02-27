import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink exact to="/" activeStyle={{background: 'chocolate'}} style={link}>Home</NavLink>
      <NavLink to="/actors" activeStyle={{background: 'chocolate'}} style={link}>Actors</NavLink>
      <NavLink to="/movies" activeStyle={{background: 'chocolate'}} style={link}>Movies</NavLink>
      <NavLink to="/directors" activeStyle={{background: 'chocolate'}} style={link}>Directors</NavLink>
    </div>
  );
};


const link = {
  margin: '3px 6px 6px',
  textDecoration: 'none',
  color: 'white',
  background: 'darkblue',
  padding: '1em 3em'
}


export default NavBar;
