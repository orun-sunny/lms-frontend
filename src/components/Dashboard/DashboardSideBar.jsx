import { BiChart } from "react-icons/bi";
import { BsPeople, BsShop } from "react-icons/bs";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GrOrderedList } from "react-icons/gr";
import { MdAllInbox } from "react-icons/md";

function DashboardSideBar() {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content flex flex-col gap-2 border-r-4 border-gray-500">
      {/* Sidebar content here */}
      <hr className="bg-black h-1" />
      <li className="btn text-lg p-0 flex  w-full h-full  hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
        <Link className="w-full h-full" to="/dashboard">
          {" "}
          <BiChart /> Dashboard
        </Link>
      </li>
      <hr className="bg-black h-1" />

      <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
        <Link className="w-full h-full " to="/dashboard/add-courses">
          {" "}
          <IoAddCircle /> Add Courses
        </Link>
      </li>
      <hr className="bg-black h-1" />

      <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
        <Link className="w-full h-full" to="/dashboard/courses">
          {" "}
          <MdAllInbox />
          All Products
        </Link>
      </li>

      <hr className="bg-black h-1" />
      <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
        <Link className="w-full h-full" to="/dashboard/orders">
          {" "}
          <GrOrderedList /> Orders
        </Link>
      </li>

      <hr className="bg-black h-1" />
      <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
        <Link className="w-full h-full" to="/dashboard/profile">
          {" "}
          <BsPeople /> User Profile
        </Link>
      </li>
      <hr className="bg-black h-1" />

      <li className="btn text-lg p-0 flex  w-full h-full hover:border hover:border-l-8 hover:border-l-blue-300 transform transition-all duration-300">
        <Link className="w-full h-full" to="/">
          {" "}
          <BsShop /> Home
        </Link>
      </li>
      <hr className="bg-black h-1" />

      <img src={logo} alt="logo" className="w-full rounded-full mx-auto" />
    </ul>
  );
}

export default DashboardSideBar;
