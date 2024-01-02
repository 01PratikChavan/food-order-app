import React, { useContext } from 'react'
import Button from './UI/Button'
import CartContext from '../store/CartContextProvider'

const MealItem =({meal}) => {
    //console.log(meal);

    const { addItem } = useContext(CartContext);

  return (
    <li className='meal-item'>
        <article>
            <div>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p className='meal-item-price'>
                  {`₹${meal.price}`}
            </p>
            <p className='meal-item-description'>
                   {meal.description}
            </p>
            </div>
            <p className='meal-item-actions'>
                <Button onClick={()=>{addItem(meal)}} >Add to cart</Button>
            </p>
        </article>
        
    </li>
  )
}

export default MealItem
