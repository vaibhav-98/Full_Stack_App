import React, { useEffect, useState } from 'react';
import API from '../api';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await API.get('/items');
        setItems(data);
      } catch (error) {
        alert('Error fetching items');
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
