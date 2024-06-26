import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const [signOut, loading] = useSignOut(auth);
  const [user, uLoading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading || uLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="">Shop</Link>
            </li>
            <li>
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-custom-primary">
          Watch Universe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="">Shop</Link>
          </li>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={async () => {
              const success = await signOut();
              if (success) {
                Swal.fire({
                  title: "Logout Successfull!",
                  text: "You are logged out.",
                  icon: "success",
                });
              }
            }}
            className="btn bg-custom-secondary text-white btn-sm rounded-full"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="btn bg-custom-secondary text-white btn-sm rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
