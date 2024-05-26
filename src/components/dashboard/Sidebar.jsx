import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:pt-14 pt-2 pl-5">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden flex flex-row-reverse justify-between pr-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <p className="text-xl font-bold">Watch Universe</p>
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <h2 className="text-xl font-bold bg-base-200 p-5">Watch Universe</h2>
        <ul className="menu pl-10 w-72 min-h-full bg-base-200 text-base-content">
          <li className="font-bold">
            <Link to="">Profile</Link>
          </li>
          <li className="font-bold">
            <Link to="all-products">All Products</Link>
          </li>
          <li className="font-bold">
            <Link to="add-product">Add New Product</Link>
          </li>
          <li className="font-bold">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
