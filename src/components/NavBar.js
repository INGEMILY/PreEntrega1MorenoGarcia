import React, { useState } from 'react';
import './NavBar.css'; 
import CartWidget from './CartWidget'; 

const NavBar = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('');

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="brand">TAEKWONDO STORE</h1>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#" onClick={() => handleCategoryClick('Implementos')}>Implementos</a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => handleCategoryClick('Uniformes')}>Uniformes</a>
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => handleCategoryClick('Accesorios')}>Accesorios</a>
          </li>
        </ul>
        <CartWidget />
      </nav>

      {}
      <div className="category-info">
        {selectedCategory && (
          <p>{`Has seleccionado: ${selectedCategory}`}</p>
        )}
      </div>
    </>
  );
};

export default NavBar;
