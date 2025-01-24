import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const AddItem = () => {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/items', formData);
      navigate('/dashboard');
    } catch (error) {
      alert('Error adding item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
