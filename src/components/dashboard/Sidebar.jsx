import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content pt-10 pl-5">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu pl-10 pt-10 w-72 min-h-full bg-base-200 text-base-content">
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
