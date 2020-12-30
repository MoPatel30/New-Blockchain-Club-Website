import React from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import CoinSummaryPage from "./CoinSummaryPage";

import { WatchListContextProvider } from './watchListContext';
export const Track = () => {
    return (
        <div className="all-coins">
            <WatchListContextProvider>
                <BrowserRouter>
                    
                        <Route exact path= "/" component={CoinSummaryPage} /> 
                        
                </BrowserRouter>
            </WatchListContextProvider>
        </div>
    )
     
}

export default Track