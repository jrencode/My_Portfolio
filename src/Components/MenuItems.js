import React from 'react'

export default function MenuItems({menuItems}) {
  return (
    <div className="portfolios">
      {
        menuItems.map((item) => {
          return (
            <div className="portfolio" key={item.id}>
                <div className="image-data">
                  <img src={item.image} alt="" />
                  <ul className="hover-items">
                    <li>
                      {item.link1}
                    </li>
                  </ul>
                </div>
                <h5>
                  {item.title}
                </h5>
                <p>Placeholder paragraph</p>
            </div>
          )
        })
      }
    </div>
  )
}
