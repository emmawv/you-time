import { useState } from 'react';
import useForm from '../lib/useForm';
import FormStyles from './styles/FormStyles';

const CreateProduct = () => {
  // Instead of useState we create and use a custom hook to handle inputs.
  const { inputs, handleChange } = useForm({
    name: 'Best Book Ever',
    price: 689,
    description: 'So good',
  }); // {} instead of [] beacuse the retun is an object we are destructuring.
  return (
    <FormStyles>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Description
        <textarea
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          value={inputs.description}
          onChange={handleChange}
        />
      </label>
    </FormStyles>
  );
};

export default CreateProduct;
