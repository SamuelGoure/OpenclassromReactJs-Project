import React from 'react';
import { plantList } from './datas/PlantList';
import './styles/Shopping.css'


function ShoppingList () {

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
   
    return (
        <div>
            <ul>
				{categories.map((acc) => (
					<li key={acc}>{acc}</li>
				))}
			</ul>
			
            <ul>
            {plantList.map((plant) =>(
                <li key={plant.id}>
                    {plant.isBestSale ? <span> {plant.name} 😇  </span> :  <span> {plant.name} 🐕 </span> }
                 </li>
               ))}
            </ul>
            <ul className='lmj-plant-list'>
            {plantList.map((plant) =>(
                <li key={plant.id} className='lmj-plant-item'>
                    {plant.isSpecialOffer ? <div className='lmj-sales'>{plant.name} Soldes</div> :  <span> {plant.name} 🐕 </span> }
                 </li>
               ))}
            </ul>
          </div>
          
      
    );
};

export default ShoppingList;

