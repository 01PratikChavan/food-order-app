import React, { useEffect, useState } from 'react'
import MealItem from './MealItem'

const Meals = () => {

    const[meals,setMeals]=useState([]);
    const[error,setError]=useState(false);


    useEffect(()=>{

        async function fetchMeals(){
            try{
                const response = await fetch('http://localhost:3000/meals');
                const mealsData = await response.json();
                if(!response.ok){
                      setError(true);
                      return ;
                }
              setMeals(mealsData);
            }catch(error){
                setError(true);
                alert(error.message) ;
                return ;
            }
            setError(false);

        } ;

        fetchMeals();

    } ,[]) ;
  return (
    <ul id='meals'>
        {error && <h1>Error while loading data Try again</h1>}
            { meals.map((meal)=>{
             return <MealItem meal={meal} />
                    }
                )
            }
    </ul>
  )
}

export default Meals
