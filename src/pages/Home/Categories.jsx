import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import useFunction from "../../hooks/useFunction";
import { Link } from "react-router-dom";

function Categories() {
  const [allCategories, setAllCategories] = useState([]);
  const { isEmpty } = useFunction();
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data.slice(0, 12)));
  }, []);
  if (isEmpty(allCategories)) {
    return <LoadingSpinner />;
  }
  return (
    <div className="my-6 mt-10">
      <h2 className="text-2xl font-bold text-black uppercase">Categories</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {allCategories.slice(0, 3).map((category) => (
          <CategoriesCard category={category} key={category._id} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to={"/categories-all"}
          className="btn  bg-black btn-outline btn-sm text-white  mt-4"
        >
          More {">>"}
        </Link>
      </div>
    </div>
  );
}

export default Categories;
