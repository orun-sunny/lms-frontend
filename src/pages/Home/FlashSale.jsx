import { useEffect, useState } from "react";
import FlashSaleCard from "./FlashSaleCard";

import useFunction from "../../hooks/useFunction";
import LoadingSpinner from "../../components/LoadingSpinner";

function FlashSale() {
  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        const filteredData = data.filter(
          (product) => product?.flash_sale === true
        );

        setProducts(filteredData.slice(0, 6));
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-black uppercase">FlashSale</h2>
      <div className="flex md:flex-row flex-col shadow-xl rounded-lg p-6 justify-between items-center">
        <div className="flex md:flex-row flex-col gap-9 items-center">
          <p className="text-xl text-orange-400 font-medium">
            Only 30% off Sale Now
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <FlashSaleCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default FlashSale;
