import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-36 h-14"
            src="https://gradxacademy.in/wp-content/uploads/2022/12/GradX-Logo-for-Black-1536x768.png"
            alt="GradX Academy Logo"
          />
          <h1 className="text-lime-400 ml-4 text-2xl">MarQuery Tech</h1>
        </div>
        <div>
          <p id="welcome-message" className="text-lime-400">
            Welcome, User!
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
