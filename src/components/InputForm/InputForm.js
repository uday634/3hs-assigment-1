import React, { useEffect, useState } from "react";

const InputForm = (props) => {
  const [id, setId] = useState("");
  const [sellingPrice, setsellingPrice] = useState("");
  const [productName, setproductName] = useState("");
  const [category, setcategory] = useState("");


  //UPDATING THE INPUT FIELDS
  const idInputHandler = (e) => {
    setId(e.target.value);
  };
  const sellingPriceInputHandler = (e) => {
    setsellingPrice(e.target.value);
  };
  const productNameInputHandler = (e) => {
    setproductName(e.target.value);
  };
  const categoryInputHandler = (e) => {
    setcategory(e.target.value);
  };
  const submitHandler = () => {
    props.inputData({ id, sellingPrice, productName, category });
    setId("");
    setcategory("");
    setproductName("");
    setsellingPrice("");
  };

  useEffect(() => {}, [id, sellingPrice, productName, category]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            value={id}
            className="id"
            id="id"
            onChange={idInputHandler}
          />
        </div>
        <div>
          <label htmlFor="selling-price">Selling Price:</label>
          <input
            type="number"
            value={sellingPrice}
            className="selling-price"
            id="selling-price"
            onChange={sellingPriceInputHandler}
          />
        </div>
        <div>
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            value={productName}
            className="product-name"
            id="product-name"
            onChange={productNameInputHandler}
          />
        </div>
        <div>
          <label htmlFor="category">Choose a Category:</label>
          <select
            onChange={categoryInputHandler}
            value={category}
            className="category"
            id="category"
          >
            <option>Selecet Product</option>
            <option>Electronic</option>
            <option>Food</option>
            <option>Skincare</option>
          </select>
        </div>
        <button onClick={submitHandler}>Add Item</button>
      </div>
    </>
  );
};

export default InputForm;
