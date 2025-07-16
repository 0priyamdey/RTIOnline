import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPhone, FaMobileAlt, FaQuestionCircle } from "react-icons/fa";

const RTIRequestForm = () => {
  const CAPTCHA_TEXT = "8fupr9";

  const [formData, setFormData] = useState({
    department: "",
    name: "",
    gender: "Male",
    address1: "Dhaleswar",
    address2: "Road 3",
    address3: "Agartala",
    pincode: "",
    country: "India",
    state: "",
    district: "",
    education: "Literate",
    phone: "",
    mobile: "",
    email: "",
    citizenship: "Indian",
    bpl: "No",
    rtiText: "",
    file: null,
    captcha: "",
  });

  const [charCount, setCharCount] = useState(0);
  const [fileError, setFileError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [departments, setDepartments] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/GetCountryList").then((res) => setCountries(res.data));
    axios.get("http://localhost:8080/GetStateList").then((res) => setStates(res.data));
    axios.get("http://localhost:8080/rti-master/GetDepartmentList").then((res) => setDepartments(res.data));
  }, []);

  useEffect(() => {
    if (formData.state) {
      axios.get(`http://localhost:8080/GetDistrictList?state_code=${formData.state}`)
        .then((res) => setDistricts(res.data));
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const file = files[0];
      if (file && file.name.includes(" ")) {
        setFileError("Filename should not have blank spaces.");
      } else {
        setFileError("");
      }
      setFormData({ ...formData, file });
      return;
    }
    if (name === "rtiText") setCharCount(value.length);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== CAPTCHA_TEXT) {
      setCaptchaError("Incorrect captcha entered.");
      return;
    }
    setCaptchaError("");
    // Submit form data here
    alert("Form submitted ✅");
  };

  const Label = ({ text, required }) => (
    <label className="font-bold whitespace-nowrap">
      {required && <span className="text-red-600">*</span>} <span className="text-black">{text}</span>
    </label>
  );

  const RefreshCaptchaText = () => (
    <div className="text-blue-600 text-sm mt-1 cursor-pointer hover:underline">
      Can't read the image? <span className="hover:text-blue-800">Click here to refresh</span>
    </div>
  );

  const QuestionMark = () => (
    <FaQuestionCircle className="text-gray-500 ml-2 inline-block" />
  );

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto my-10 p-6 border border-blue-600 rounded">
      <h1 className="text-center text-xl font-bold text-blue-700 mb-2">Online RTI Request Form</h1>
      <p className="text-center text-green-700 text-sm mb-4">
        Data to be entered only in English <span className="text-black ml-1">Note: Fields marked with * are Mandatory.</span>
      </p>

      {/* PUBLIC AUTHORITY DETAILS */}
      <div className="mb-4">
        <label className="text-blue-700 font-semibold block mb-1">Public Authority Details:</label>
        <div className="grid grid-cols-2 gap-2 items-center border p-2">
          <Label text="Select Department/Public Authority" required />
          <select name="department" value={formData.department} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="">Select</option>
            {departments.map((dept, i) => (
              <option key={i} value={dept.departmentCode}>{dept.departmentName}</option>
            ))}
          </select>
        </div>
      </div>

      {/* PERSONAL DETAILS */}
      <div className="border border-gray-300 p-4 rounded mb-6">
        <h3 className="text-blue-700 font-semibold mb-4 text-lg">Personal Details of RTI Applicant:-</h3>
        <div className="grid grid-cols-1 gap-2">

          {/* Name */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Name" required />
            <div className="flex items-center">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" />
              <QuestionMark />
            </div>
          </div>

          {/* Gender */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Gender" />
            <div>
              {["Male", "Female"].map((g) => (
                <label key={g} className="mr-4">
                  <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} /> {g}
                </label>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Address" required />
            <div>
              {["address1", "address2", "address3"].map((field) => (
                <div className="flex items-center mb-1" key={field}>
                  <input type="text" name={field} value={formData[field]} onChange={handleChange} className="w-full border p-2 rounded" />
                  <QuestionMark />
                </div>
              ))}
            </div>
          </div>

          {/* Pincode */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Pincode" />
            <div className="flex items-center">
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full border p-2 rounded" />
              <QuestionMark />
            </div>
          </div>

          {/* Country - radio */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Country" />
            <div>
              {["India", "Other"].map((c) => (
                <label key={c} className="mr-4">
                  <input type="radio" name="country" value={c} checked={formData.country === c} onChange={handleChange} /> {c}
                </label>
              ))}
            </div>
          </div>

          {/* State */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="State" />
            <select name="state" value={formData.state} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="">Select</option>
              {states.map((state, i) => (
                <option key={i} value={state.stateCode}>{state.stateName}</option>
              ))}
            </select>
          </div>

          {/* District */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="District" />
            <select name="district" value={formData.district} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="">Select</option>
              {districts.map((d, i) => (
                <option key={i} value={d.districtCode}>{d.districtName}</option>
              ))}
            </select>
          </div>

          {/* Education */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Educational Status" />
            <div>
              {["Literate", "Illiterate"].map((e) => (
                <label key={e} className="mr-4">
                  <input type="radio" name="education" value={e} checked={formData.education === e} onChange={handleChange} /> {e}
                </label>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Phone Number" />
            <div className="flex items-center gap-2">
              <FaPhone className="text-gray-500" />
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" />
              <QuestionMark />
            </div>
          </div>

          {/* Mobile */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Mobile Number" />
            <div className="flex items-center gap-2">
              <FaMobileAlt className="text-gray-500" />
              <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full border p-2 rounded" />
              <QuestionMark />
            </div>
          </div>

          {/* Email */}
          <div className="grid grid-cols-2 border p-2">
            <Label text="Email-ID" required />
            <div className="flex items-center">
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
              <QuestionMark />
            </div>
          </div>
        </div>
      </div>

      {/* REQUEST DETAILS */}
      <div className="border border-gray-300 p-4 rounded mb-6">
        <h3 className="text-blue-700 font-semibold mb-4 text-lg">Request Details :-</h3>

        {/* Citizenship */}
        <div className="grid grid-cols-2 border p-2">
          <Label text="Citizenship" />
          <select name="citizenship" value={formData.citizenship} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="Indian">Indian</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* BPL */}
        <div className="grid grid-cols-2 border p-2">
          <Label text="Is the applicant below poverty line?" required />
          <div>
            <select name="bpl" value={formData.bpl} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.bpl === "No" && (
              <div className="text-red-600 text-sm mt-1">You are required to pay the RTI fee of ₹ 10</div>
            )}
          </div>
        </div>

        {/* RTI Text */}
        <div className="border border-red-500 text-red-600 text-sm font-bold p-2">
          Note:- Only alphabets A-Z a-z number 0-9 and special characters , . - _ () / @ : & \ % are allowed in Text for RTI Request application.
        </div>
        <div className="grid grid-cols-2 border p-2">
          <Label text="Text for RTI Request application" required />
          <div>
            <textarea name="rtiText" value={formData.rtiText} onChange={handleChange} rows={5} className="w-full border p-2 rounded" />
            <div className="text-green-600 text-sm">{charCount}/3000 Characters entered</div>
          </div>
        </div>

        {/* File Upload */}
        <div className="grid grid-cols-2 border p-2">
          <Label text="Supporting document {(Only pdf upto 1 MB)}" />
          <div className="flex items-center gap-2 border rounded p-2">
            <label className="bg-gray-200 px-4 py-1 rounded cursor-pointer hover:bg-gray-300">
              Browse
              <input type="file" name="file" accept="application/pdf" onChange={handleChange} className="hidden" />
            </label>
            <span className="text-sm">{formData.file?.name || "No file selected"}</span>
          </div>
        </div>

        {/* Captcha */}
        <div className="grid grid-cols-2 border p-2">
          <Label text="Enter Captcha code" required />
          <div>
            <div className="bg-gray-300 text-black font-bold px-3 py-1 inline-block mb-1">{CAPTCHA_TEXT}</div>
            <input type="text" name="captcha" value={formData.captcha} onChange={handleChange} className="w-full border p-2 rounded" />
            {captchaError && <div className="text-red-600 text-sm">{captchaError}</div>}
            <RefreshCaptchaText />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:cursor-pointer">Submit</button>
        <button type="reset" className="bg-gray-300 text-black px-6 py-2 rounded hover:cursor-pointer">Reset</button>
      </div>
    </form>
  );
};

export default RTIRequestForm;
