/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../Components/allportfolios';
import { useState } from 'react';

export const PortfolioPage = () => {
  
  const [categories, setCategories] = useState(null);
  const [menuItems, setMenuItems] = useState(portfolios);

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={'Portfolio'} span={'Portfolio'}/>
      </div>
      <div className="portfolio-data">
        <Categories />
        <MenuItems menuItems={menuItems} />
      </div>
    </div>
    
  )
}
