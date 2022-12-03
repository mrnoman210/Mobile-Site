import React from 'react'
import { mobiles } from '../../../javascripts/products'
import Card from './Card';
import "./Card.css"

const Cards = () => {
  return (
      <>
          <section>
              <h1 className='Group_of_card_top'>New Features</h1>
              <div className="cardmain_div">
          {mobiles.map(items => { 
              return <Card id={items.id} productname={items.name} image={items.Image} price={ items.price} />
          })}
                  </div>
                  </section>
      </>
  )
}

export default Cards