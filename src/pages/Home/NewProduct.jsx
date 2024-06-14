import { useEffect, useState } from "react";
import NewProductCard from "./NewProductCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFunction from "../../hooks/useFunction";
import { Link } from "react-router-dom";

function NewProduct() {
  const [products, setProducts] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        setProducts(data.slice(0, 12));
      });
  }, []);
  if (isEmpty(products)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold  uppercase">New Product</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <NewProductCard product={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={"/new-product-page"}
          className="btn font-bold bg-black text-white  btn-sm mt-6"
        >
          More Here {">>"}
        </Link>
      </div>
    </div>
  );
}

export default NewProduct;
