import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 z-[100] absolute w-full ">
      <div className="flex justify-between items-center w-full md:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1400px]">
        <Link to="/home">
          <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
        </Link>

        {user ? (
          <div>
            <Link to="/mylist">
              <button className="text-white pr-4">My List</button>
            </Link>
            <Link to="/account">
              <button className="text-white pr-4">Profile</button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800 transition duration-300 ease-in-out"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="text-white pr-4">Sign In</button>
            </Link>
            <Link to="/signup">
              <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-red-800 transition duration-300 ease-in-out">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
