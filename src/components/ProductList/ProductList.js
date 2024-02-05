import React, { useEffect } from "react";

const ProductList = ({ electronicData, setElectronicData, foodData, setFoodData, skinCareData, setSkinCareData }) => {
  useEffect(() => {
    localStorage.setItem('Electronic', JSON.stringify(electronicData));
    localStorage.setItem('Food', JSON.stringify(foodData));
    localStorage.setItem('Skincare', JSON.stringify(skinCareData));
  }, [electronicData, foodData, skinCareData]);

  const deleteProductHandler = (categoryId, productId) => {
    switch (categoryId) {
      case 'Electronic':
        setElectronicData((prevData) => prevData.filter(data => data.id !== productId));
        break;
      case 'Food':
        setFoodData((prevData) => prevData.filter(data => data.id !== productId));
        break;
      case 'Skincare':
        setSkinCareData((prevData) => prevData.filter(data => data.id !== productId));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Electronic Items</h1>
      <ul>
        {electronicData.map(data => (
          <li key={data.id}>
            {data.id} - {data.sellingPrice} - {data.productName}
            <button onClick={() => deleteProductHandler('Electronic', data.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h1>Food Items</h1>
      <ul>
        {foodData.map(data => (
          <li key={data.id}>
            {data.id} - {data.sellingPrice} - {data.productName}
            <button onClick={() => deleteProductHandler('Food', data.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h1>Skin Care Items</h1>
      <ul>
        {skinCareData.map(data => (
          <li key={data.id}>
            {data.id} - {data.sellingPrice} - {data.productName}
            <button onClick={() => deleteProductHandler('Skincare', data.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
