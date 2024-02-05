import React, {  useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const [electronicData, setElectronicData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [skinCareData, setSkinCareData] = useState([]);


  //SETTING THE INPUTDATA AND STORING IN ARRAY
  const inputDataHandler = (productData) => {
    if (productData.category === "Electronic") {
      setElectronicData((prevData) => {
        const updatedData = [productData, ...prevData];
        return updatedData;
      });
    } else if (productData.category === "Food") {
      setFoodData((prevData) => {
        const updatedData = [productData, ...prevData];
        return updatedData;
      });
    } else if (productData.category === "Skincare") {
      setSkinCareData((prevData) => {
        const updatedData = [productData, ...prevData];
        return updatedData;
      });
    } else {
      alert("Enter the Correct Data");
    }
  };

  return (
    <div>
      <InputForm inputData={inputDataHandler} />
      <ProductList
        electronicData={electronicData}
        setElectronicData = {setElectronicData}
        foodData={foodData}
        setFoodData={setFoodData}
        skinCareData={skinCareData}
        setSkinCareData={setSkinCareData}
      />
    </div>
  );
}

export default App;
