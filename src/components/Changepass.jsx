import React, { useState } from "react";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and backend API call here
    console.log("Submitted data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with Logos */}
      <header className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 p-4">
          <img
            src="/images/image.png"
            alt="Gov Logo"
            className="h-12 w-auto object-contain"
          />
          <img
            src="/images/right.png"
            alt="RTI Logo"
            className="h-12 w-auto object-contain"
          />
          <h1 className="text-xl font-bold text-center text-blue-900 flex-1">
            Right to Information Online Portal
            <div className="text-sm font-normal">
              An initiative of Administrative Reforms, Training,pension and public Grievances Department,Government of Tripura
            </div>
          </h1>
         
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-3 text-sm font-medium">
  <div className="flex justify-between w-full max-w-7xl mx-auto">
    <a href="#" className="flex-1 text-center">HOME</a>
    <a href="#" className="flex-1 text-center">Application List</a>
    <a href="#" className="flex-1 text-center">Search Application</a>
    <a href="#" className="flex-1 text-center">Master Updation</a>
    <a href="#" className="flex-1 text-center underline">Change password</a>
    <a href="#" className="flex-1 text-center">Create/Deactivate Login</a>
    <a href="#" className="flex-1 text-center">Logout</a>
  </div>
</nav>


      {/* Main Content */}
     {/* Main Content */}
<div className="max-w-3xl w-full mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
  <h2 className="text-center text-xl font-semibold mb-2">
    Welcome to Nodal Officer
  </h2>
   <h5 className="text-center text-xl text-purple-700 font-semibold mb-2">
   (Tripura public service commission)
  </h5>
 <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
  <p>Public Authority: Tripura Public Service Commission</p>
  <p>Role: Nodal Officer</p>
</div>


  <p className="text-green-700 text-center text-sm font-medium mb-6">
    (Please note that fields prefixed with * are mandatory)
  </p>

  <form onSubmit={handleSubmit} className="w-full">
    {/* Current Password */}
    <div className="mb-4 flex items-center w-full">
      <label className="w-1/3 font-medium text-gray-800">
        * Enter Current Password:
      </label>
      <input
        type="password"
        name="currentPassword"
        value={formData.currentPassword}
        onChange={handleChange}
        className="w-2/3 border border-gray-400 rounded px-3 py-2"
        required
      />
    </div>

    {/* New Password */}
    <div className="mb-4 flex items-center w-full">
      <label className="w-1/3 font-medium text-gray-800">
        * Enter the New Password:
      </label>
      <input
        type="password"
        name="newPassword"
        value={formData.newPassword}
        onChange={handleChange}
        className="w-2/3 border border-gray-400 rounded px-3 py-2"
        required
      />
    </div>

    {/* Confirm Password */}
    <div className="mb-6 flex items-center w-full">
      <label className="w-1/3 font-medium text-gray-800">
        * Re-type the New Password:
      </label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-2/3 border border-gray-400 rounded px-3 py-2"
        required
      />
    </div>

    <div className="flex justify-center gap-4">
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
      <button
        type="reset"
        className="bg-gray-300 text-black px-5 py-2 rounded hover:bg-gray-400"
        onClick={() =>
          setFormData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          })
        }
      >
        Reset
      </button>
    </div>
  </form>
</div>

      

    

      {/* Footer */}
       
     
      <footer className="bg-blue-500 text-white text-center text-sm py-4 mt-10">
        <div> Content of the portal is determined by administrative office,training pension and public grievances</div>
        <div> Copyright © 2025. All Rights Reserved. Maintained by Tripura Information Commission and Developed by NIC, Tripura</div>
     
      </footer>
    </div>
  );
};

export default ChangePassword;
