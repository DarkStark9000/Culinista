import React, { useState } from 'react';

const Nav = () => {
  const [recipeSearch, setRecipeSearch] = useState('');

  return (
    <div className="navbar">
      <input onChange={e => setRecipeSearch(e.target.value)} type="text" id="search" placeholder="Search any receipe" />
    </div>
  );
};

export default Nav;
