import React, { useEffect, useState } from 'react';
import { getStocks } from '../api/stockAPI';

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [topPerformingStock, setTopPerformingStock] = useState(null);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await getStocks();
      const stockData = response.data;
      setStocks(stockData);
      calculateTotalValue(stockData);
      calculateTopPerformingStock(stockData);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const calculateTotalValue = (stocks) => {
    const total = stocks.reduce((acc, stock) => {
      return acc + stock.quantity * stock.currentPrice;
    }, 0);
    setTotalValue(total);
  };

  const calculateTopPerformingStock = (stocks) => {
    let bestStock = null;
    let highestPerformance = 0;
    stocks.forEach((stock) => {
      const performance = (stock.currentPrice - stock.buyPrice) * stock.quantity;
      if (performance > highestPerformance) {
        highestPerformance = performance;
        bestStock = stock;
      }
    });
    setTopPerformingStock(bestStock);
  };

  return (
    <div className="mt-3">
      <h3>Dashboard</h3>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Portfolio Value</h5>
              <p className="card-text">${totalValue.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Top Performing Stock</h5>
              {topPerformingStock ? (
                <div>
                  <p><strong>{topPerformingStock.name} ({topPerformingStock.ticker})</strong></p>
                  <p>Performance: ${(topPerformingStock.currentPrice - topPerformingStock.buyPrice).toFixed(2)} per share</p>
                  <p>Total Gain: ${(topPerformingStock.currentPrice - topPerformingStock.buyPrice) * topPerformingStock.quantity}</p>
                </div>
              ) : (
                <p>No stocks available</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Portfolio Distribution</h5>
              <ul>
                {stocks.map((stock) => (
                  <li key={stock.id}>
                    {stock.name} ({stock.ticker}): ${(stock.quantity * stock.currentPrice).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
