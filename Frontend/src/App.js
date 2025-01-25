import React, { useEffect, useState } from 'react';
import StockList from './components/StockList';
import StockForm from './components/StockForm';
import { getStocks } from './api/stockAPI';

const App = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await getStocks();
      setStocks(response.data);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  return (
    <div className="container">
      <h1>Stock Portfolio Tracker</h1>
      <StockForm fetchStocks={fetchStocks} />
      <StockList stocks={stocks} fetchStocks={fetchStocks} />
    </div>
  );
};

export default App;
