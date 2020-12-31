import React from 'react';
import CoinList from './CoinList';
import { WatchListContextProvider } from './watchListContext';


export const Track = () => {
    return (
        <div className="all-coins">

            <WatchListContextProvider>
                <CoinList />
            </WatchListContextProvider>

        </div>
    )
     
}

export default Track
