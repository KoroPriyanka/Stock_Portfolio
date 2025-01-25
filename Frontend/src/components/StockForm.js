import React, { useState } from 'react';
import { addStock } from '../api/stockAPI';

const StockForm = ({ fetchStocks }) => {
  const [stock, setStock] = useState({
    name: '',
    ticker: '',
    quantity: 1,
    buyPrice: 0,
    currentPrice: 0,
  });

  const handleChange = (e) => {
    setStock({
      ...stock,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStock(stock);
      fetchStocks(); // Refresh the stock list
      setStock({
        name: '',
        ticker: '',
        quantity: 1,
        buyPrice: 0,
        currentPrice: 0,
      });
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  return (
    <div className="mt-3">
      <h3>Add Stock</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={stock.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Ticker</label>
          <input
            type="text"
            name="ticker"
            value={stock.ticker}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={stock.quantity}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Buy Price</label>
          <input
            type="number"
            name="buyPrice"
            value={stock.buyPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Current Price</label>
          <input
            type="number"
            name="currentPrice"
            value={stock.currentPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Stock</button>
      </form>
    </div>
  );
};

export default StockForm;
