import React, { useEffect, useState, useContext } from 'react';
//import axios from 'axios';
import coinGecko from "./coinGecko";
import { WatchListContext } from './watchListContext';
import Coin  from './Coin';
import "./Coins.css"


const CoinList = () => {
    const [coins, setCoins] = useState([]);
    const {watchList, deleteCoin} = useContext(WatchListContext)
    const [isLoading,setIsLoading] = useState(false)
    
    useEffect(() => { 
        const fetchData = async () => {
            setIsLoading(true)
            const response = await coinGecko.get("coins/markets", {
                params: {
                 vs_currency: "usd",
                 ids: watchList.join(","),
                }
            })
            setCoins(response.data)
            setIsLoading(false)
        }

        if(watchList.length > 0){
            fetchData();
        } else{
            setCoins([]);
        }
            
    },[watchList])


    const renderCoins = () => {
        if(isLoading){
            return <div>Loading...</div>
        }

        return (
           
                <div className = "listed-coins">
                    {coins.map(coin => {
                    return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                    })}
                </div>
         
        )
    }


  return  <div>{renderCoins()}</div>;  

};

export default CoinList;