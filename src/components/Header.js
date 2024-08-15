import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          <Link to="/">Property Rental</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li className="flex flex-col">
              <Link to="/cart" className="hover:text-gray-200">
                Cart{" "}
                {cartCount > 0 && (
                  <span className="px-2 py-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
