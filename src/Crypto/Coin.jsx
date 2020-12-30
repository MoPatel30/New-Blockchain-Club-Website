import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({coin, deleteCoin}) => {
    return (
            <li className= "list-size coinlist-item lists-items list-group-item-action align-items-center text-dark">
                <img className = "coinlist-image" src={coin.image} alt="" />
                <span className="text-decoration-none">${coin.current_price}</span>
                
                
                <span 
                    className={
                        coin.price_change_percentage_24h < 0 
                            ? "text-danger mr-2" 
                            : "text-success mr-2"
                    }
                >   
                    {coin.price_change_percentage_24h < 0 
                   ? (<i className = "fas fa-sort-down align-middle mr-1"></i>)
                   : (<i className = "fas fa-sort-up align-middle mr-1"></i>)
                    
                    }
                
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
                
            </li>
    );
     
};

export default Coin