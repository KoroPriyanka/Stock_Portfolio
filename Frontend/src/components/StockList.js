import React from 'react';
import { deleteStock } from '../api/stockAPI';

const StockList = ({ stocks, fetchStocks }) => {
  const handleDelete = async (id) => {
    try {
      await deleteStock(id);
      fetchStocks(); // Refresh the stock list
    } catch (error) {
      console.error('Error deleting stock:', error);
    }
  };

  return (
    <div className="mt-3">
      <h3>Stock Holdings</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.quantity}</td>
              <td>{stock.buyPrice}</td>
              <td>{stock.currentPrice}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(stock.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
