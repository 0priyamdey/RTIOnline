import React, { useEffect, useState } from "react";
import axios from "axios";

const RTIRequestForm = () => {
  const CAPTCHA_TEXT = "7Odbx4";

  const [formData, setFormData] = useState({
    department: "",
    name: "Test",
    gender: "Male",
    address1: "Dhaleswar",
    address2: "Road 3",
    address3: "Agartala",
    pincode: "799007",
    country: "India",
    state: "",
    district: "",
    education: "Literate",
    phone: "0381230584",
    mobile: "9999999999",
    email: "test@gmail.com",
    citizenship: "Indian",
    bpl: "No",
    rtiText: "Text For RTI Request Application",
    file: null,
    captcha: "",
  });

  const [charCount, setCharCount] = useState(formData.rtiText.length);
  const [fileError, setFileError] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const [departments, setDepartments] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [countries, setCountries] = useState([]);

  // Fetch initial dropdown data
  useEffect(() => {
    axios.get("http://localhost:8080/GetCountryList")
      .then((res) => setCountries(res.data))
      .catch(console.error);

    axios.get("http://localhost:8080/GetStateList")
      .then((res) => setStates(res.data))
      .catch(console.error);

    axios.get("http://localhost:8080/rti-master/GetDepartmentList")
      .then((res) => setDepartments(res.data))
      .catch(console.error);
  }, []);

  // Fetch district list on state change
  useEffect(() => {
    if (formData.state) {
      axios.get(`http://localhost:8080/GetDistrictList?state_code=${formData.state}`)
        .then((res) => setDistricts(res.data))
        .catch(console.error);
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
    alert("RTI Request Submitted ✅");
  };

  const handleReset = () => window.location.reload();

  const Label = ({ text, required }) => (
    <label className="font-bold whitespace-nowrap">
      {required && <span className="text-red-600">*</span>} <span className="text-black">{text}</span>
    </label>
  );

  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="max-w-5xl mx-auto my-10 p-6 border border-blue-500 rounded bg-white shadow"
    >
      <h1 className="text-center text-xl font-bold text-blue-700 mb-2">
        Online RTI Request Form
      </h1>
      <p className="text-center text-green-700 text-sm mb-4">
        Data to be entered only in English
        <span className="text-gray-700 ml-2">Note: Fields marked with * are Mandatory.</span>
      </p>

      {/* PUBLIC AUTHORITY DETAILS */}
      <div className="mb-4">
        <label className="text-blue-700 font-semibold block mb-1">Public Authority Details:</label>
        <div className="grid grid-cols-2 gap-2 items-center border p-2">
          <Label text="Select Department/Public Authority" required />
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept.departmentCode}>
                {dept.departmentName}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* PERSONAL DETAILS */}
      <div className="border border-gray-300 p-4 rounded mb-6">
        <h3 className="text-blue-700 font-semibold mb-4 text-lg">Personal Details of RTI Applicant:-</h3>
        <div className="grid grid-cols-1 gap-2">
          {/* Name */}
          <div className="grid grid-cols-2 border">
            <div className="p-2"><Label text="Name" required /></div>
            <div className="p-2">
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" />
            </div>
          </div>

          {/* Gender */}
          <div className="grid grid-cols-2 border">
            <div className="p-2"><Label text="Gender" /></div>
            <div className="p-2">
              {["Male", "Female"].map((g) => (
                <label key={g} className="mr-4">
                  <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} /> {g}
                </label>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-2 border">
            <div className="p-2"><Label text="Address" required /></div>
            <div className="p-2">
              {["address1", "address2", "address3"].map((line) => (
                <input key={line} type="text" name={line} value={formData[line]} onChange={handleChange} className="w-full border p-2 rounded mb-1" />
              ))}
            </div>
          </div>

          {/* Pincode, Country, State, District */}
          {[
            { key: "pincode", label: "Pincode" },
            { key: "country", label: "Country", type: "radio", options: countries.map(c => c.countryName) },
            { key: "state", label: "State", type: "select", options: states.map(s => ({ value: s.stateCode, label: s.stateName })) },
            { key: "district", label: "Districts", type: "select", options: districts.map(d => ({ value: d.districtCode, label: d.districtName })) },
          ].map((item) => (
            <div key={item.key} className="grid grid-cols-2 border">
              <div className="p-2"><Label text={item.label} required={item.key === "email"} /></div>
              <div className="p-2">
                {item.type === "radio" ? (
                  item.options.map((val) => (
                    <label key={val} className="mr-4">
                      <input type="radio" name={item.key} value={val} checked={formData[item.key] === val} onChange={handleChange} /> {val}
                    </label>
                  ))
                ) : item.type === "select" ? (
                  <select name={item.key} value={formData[item.key]} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="">Select</option>
                    {item.options.map((opt, i) => (
                      <option key={i} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                ) : (
                  <input type="text" name={item.key} value={formData[item.key]} onChange={handleChange} className="w-full border p-2 rounded" />
                )}
              </div>
            </div>
          ))}

          {/* Education, Phone, Mobile, Email */}
          {["education", "phone", "mobile", "email"].map((field) => (
            <div key={field} className="grid grid-cols-2 border">
              <div className="p-2"><Label text={field === "email" ? "Email-ID" : field === "mobile" ? "Mobile Number" : field === "phone" ? "Phone Number" : "Educational Status"} required={field === "email"} /></div>
              <div className="p-2">
                {field === "education" ? (
                  ["Literate", "Illiterate"].map((status) => (
                    <label key={status} className="mr-4">
                      <input type="radio" name="education" value={status} checked={formData.education === status} onChange={handleChange} /> {status}
                    </label>
                  ))
                ) : (
                  <input type={field === "email" ? "email" : "text"} name={field} value={formData[field]} onChange={handleChange} className="w-full border p-2 rounded" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REQUEST DETAILS */}
      <div className="border border-gray-300 p-4 rounded mb-6">
        <h3 className="text-blue-700 font-semibold mb-4 text-lg">Request Details :-</h3>

        {/* Citizenship */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold">Citizenship</div>
          <div className="p-2">
            <select name="citizenship" value={formData.citizenship} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* BPL */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold"><span className="text-red-600">*</span> <span className="text-black">Is the applicant below poverty line?</span></div>
          <div className="p-2">
            <select name="bpl" value={formData.bpl} onChange={handleChange} className="w-full border p-2 rounded">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.bpl === "No" && <div className="text-red-600 text-sm mt-1">You are required to pay the RTI fee of ₹ 10</div>}
          </div>
        </div>

        {/* RTI Text */}
        <div className="border border-red-500 text-red-600 text-sm font-bold p-2">
          Note:- Only alphabets A-Z a-z number 0-9 and special characters , . - _ () / @ : & \ % are allowed in Text for RTI Request application.
        </div>
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold"><span className="text-red-600">*</span> <span className="text-black">Text for RTI Request application</span></div>
          <div className="p-2">
            <textarea name="rtiText" value={formData.rtiText} onChange={handleChange} rows={5} className="w-full border p-2 rounded"></textarea>
            <div className="text-green-600 text-sm">{charCount}/3000 Characters entered</div>
          </div>
        </div>

        {/* File Upload */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold">
            Supporting document <span className="text-sm font-normal">(only pdf upto 1 MB)</span>
            <p className="text-blue-600 text-xs mt-1">
              Pdf file name should not have any blank space between any character. Special characters allowed are (a-zA-Z0-9-_)
            </p>
          </div>
          <div className="p-2 flex items-center gap-2 border rounded">
            <label className="bg-gray-200 px-4 py-1 rounded cursor-pointer hover:bg-gray-300">
              Browse
              <input type="file" name="file" accept="application/pdf" onChange={handleChange} className="hidden" />
            </label>
            <span className="text-sm">{formData.file?.name || "No file selected"}</span>
            {fileError && <div className="text-red-600 text-sm">{fileError}</div>}
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold"><span className="text-red-600">*</span> <span className="text-black">Enter Captcha code</span></div>
          <div className="p-2">
            <div className="bg-gray-300 text-black font-bold px-3 py-1 inline-block mb-1">{CAPTCHA_TEXT}</div>
            <input type="text" name="captcha" value={formData.captcha} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Enter captcha here" />
            {captchaError && <div className="text-red-600 text-sm">{captchaError}</div>}
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
