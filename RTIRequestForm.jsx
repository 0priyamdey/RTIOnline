import React, { useEffect, useState } from "react";
import axios from "axios";

const RTIRequestForm = () => {
  const CAPTCHA_TEXT = "7Odbx4";

  const [formData, setFormData] = useState({
    department: "",
    name: "",
    gender: "Male",
    address1: "",
    address2: "",
    address3: "",
    pincode: "",
    country: "",
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
  const [fileError, setFileError]   = useState("");
  const [captchaError, setCaptchaError] = useState("");

  /* dropdown data */
  const [departments, setDepartments] = useState([]);
  const [countries, setCountries]     = useState([]);
  const [states, setStates]           = useState([]);
  const [districts, setDistricts]     = useState([]);

  /* fetch dropdowns on mount */
  useEffect(() => {
    axios.get("http://localhost:8080/rti-master/GetDepartmentList")
      .then(r => setDepartments(r.data))
      .catch(console.error);

    axios.get("http://localhost:8080/GetCountryList")
      .then(r => setCountries(r.data))
      .catch(console.error);

    axios.get("http://localhost:8080/GetStateList")
      .then(r => setStates(r.data))
      .catch(console.error);
  }, []);

  /* fetch districts when state changes */
  useEffect(() => {
    if (formData.state) {
      axios.get(`http://localhost:8080/GetDistrictList?state_code=${formData.state}`)
        .then(r => setDistricts(r.data))
        .catch(console.error);
    } else {
      setDistricts([]);
    }
  }, [formData.state]);

  /* handle change */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const file = files[0];
      if (file && file.name.includes(" ")) {
        setFileError("Filename must not contain spaces.");
      } else {
        setFileError("");
      }
      setFormData(prev => ({ ...prev, file }));
      return;
    }
    if (name === "rtiText") setCharCount(value.length);
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /* submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captcha !== CAPTCHA_TEXT) {
      setCaptchaError("Incorrect captcha entered.");
      return;
    }
    setCaptchaError("");
    alert("RTI Request Submitted ✅ (integrate POST /rti/submit here)");
  };

  const handleReset = () => window.location.reload();

  const Label = ({ text, required }) => (
    <label className="font-bold whitespace-nowrap">
      {required && <span className="text-red-600">*</span>}{" "}
      <span className="text-black">{text}</span>
    </label>
  );

  /* ───────────── JSX ───────────── */
  return (
    <form
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="max-w-6xl mx-auto my-10 p-6 border border-blue-500 rounded bg-white shadow text-sm"
    >
      {/* header */}
      <h1 className="text-center text-xl font-bold text-blue-700 mb-3">
        Online RTI Request Form
      </h1>
      <p className="text-center text-green-700 text-sm mb-4">
        Data to be entered only in English&nbsp;
        <span className="text-gray-700">
          Note: Fields marked with&nbsp;
          <span className="text-red-600">*</span> are Mandatory.
        </span>
      </p>

      {/* ========== PUBLIC AUTHORITY ========== */}
      <div className="mb-6 border border-gray-300 p-4 rounded">
        <h3 className="text-blue-700 font-semibold mb-3">
          Public Authority Details:-
        </h3>
        <div className="grid grid-cols-2 border">
          <div className="p-2">
            <Label text="Department / Public Authority" required />
          </div>
          <div className="border p-2">
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              {departments.map((d) => (
                <option key={d.id || d.departmentCode} value={d.departmentName}>
                  {d.departmentName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* ========== PERSONAL DETAILS ========== */}
      <div className="mb-6 border border-gray-300 p-4 rounded">
        <h3 className="text-blue-700 font-semibold mb-3">
          Personal Details of RTI Applicant:-
        </h3>

        {/* NAME */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Name" required /></div>
          <div className="border p-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* GENDER */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Gender" /></div>
          <div className="border p-2">
            {["Male", "Female"].map((g) => (
              <label key={g} className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                />{" "}
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* ADDRESS (3 lines) */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Address" required /></div>
          <div className="border p-2 space-y-1">
            {["address1", "address2", "address3"].map((line) => (
              <input
                key={line}
                type="text"
                name={line}
                value={formData[line]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            ))}
          </div>
        </div>

        {/* PINCODE */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Pincode" /></div>
          <div className="border p-2">
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* COUNTRY */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Country" /></div>
          <div className="border p-2">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              {countries.map((c) => (
                <option key={c.id || c.countryName} value={c.countryName}>
                  {c.countryName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* STATE */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="State" /></div>
          <div className="border p-2">
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              {states.map((s) => (
                <option key={s.stateCode} value={s.stateCode}>
                  {s.stateName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* DISTRICT */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Districts" /></div>
          <div className="border p-2">
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              {districts.map((d) => (
                <option key={d.districtCode} value={d.districtName}>
                  {d.districtName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Educational Status" /></div>
          <div className="border p-2">
            {["Literate", "Illiterate"].map((e) => (
              <label key={e} className="mr-4">
                <input
                  type="radio"
                  name="education"
                  value={e}
                  checked={formData.education === e}
                  onChange={handleChange}
                />{" "}
                {e}
              </label>
            ))}
          </div>
        </div>

        {/* PHONE */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Phone Number" /></div>
          <div className="border p-2">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* MOBILE */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Mobile Number" /></div>
          <div className="border p-2">
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>

        {/* EMAIL */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Email-ID" required /></div>
          <div className="border p-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* ========== REQUEST DETAILS ========== */}
      <div className="mb-6 border border-gray-300 p-4 rounded">
        <h3 className="text-blue-700 font-semibold mb-3">Request Details :-</h3>

        {/* Citizenship */}
        <div className="grid grid-cols-2 border">
          <div className="p-2"><Label text="Citizenship" /></div>
          <div className="border p-2">
            <select
              name="citizenship"
              value={formData.citizenship}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="Indian">Indian</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* BPL */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold">
            <span className="text-red-600">*</span>{" "}
            <span className="text-black">Is the Applicant Below Poverty Line ?</span>
          </div>
          <div className="border p-2">
            <select
              name="bpl"
              value={formData.bpl}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            {formData.bpl === "No" && (
              <div className="text-red-600 text-xs mt-1">
                You are required to pay the RTI fee of ₹ 10
              </div>
            )}
          </div>
        </div>

        {/* Note */}
        <div className="border border-red-500 text-red-600 text-xs font-bold p-2">
          Note:- Only alphabets A‑Z a‑z, numbers 0‑9, and special characters , . - _ ( ) / @ : & \ % are
          allowed in Text for RTI Request application.
        </div>

        {/* RTI TEXT */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold">
            <span className="text-red-600">*</span>{" "}
            <span className="text-black">Text for RTI Request application</span>
          </div>
          <div className="border p-2">
            <textarea
              name="rtiText"
              value={formData.rtiText}
              onChange={handleChange}
              rows={5}
              className="w-full border p-2 rounded"
            ></textarea>
            <div className="text-green-600 text-xs mt-1">
              {charCount}/3000 Characters entered
            </div>
          </div>
        </div>

        {/* SUPPORTING DOCUMENT */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold">
            Supporting document{" "}
            <span className="text-sm font-normal">(only pdf up to 1 MB)</span>
            <p className="text-blue-600 text-xs mt-1 font-semibold">
              PDF filename must not contain blank spaces. Allowed special characters:
              (a-zA-Z0-9-_).
            </p>
          </div>
          <div className="border p-2 flex items-center gap-2 rounded">
            <label className="bg-gray-200 px-4 py-1 rounded cursor-pointer hover:bg-gray-300">
              Browse
              <input
                type="file"
                name="file"
                accept="application/pdf"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            <span className="text-sm">
              {formData.file?.name || "No file selected"}
            </span>
            {fileError && (
              <div className="text-red-600 text-sm">{fileError}</div>
            )}
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="grid grid-cols-2 border">
          <div className="p-2 font-bold">
            <span className="text-red-600">*</span>{" "}
            <span className="text-black">Enter Captcha code</span>
          </div>
          <div className="border p-2">
            <div className="bg-gray-300 text-black font-bold px-4 py-1 inline-block mb-1">
              {CAPTCHA_TEXT}
            </div>
            <input
              type="text"
              name="captcha"
              value={formData.captcha}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter captcha here"
            />
            {captchaError && (
              <div className="text-red-600 text-sm">{captchaError}</div>
            )}
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex justify-center gap-4">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-2 rounded font-semibold cursor-pointer hover:bg-blue-700"
        >
          Submit
        </button>
        <button
          type="reset"
          className="bg-gray-300 text-black px-8 py-2 rounded font-semibold cursor-pointer hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default RTIRequestForm;
