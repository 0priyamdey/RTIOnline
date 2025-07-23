# recordNewAppeal Module

This folder contains the frontend implementation for the 'Record New Appeal' page in the RTI-MIS portal.

## Structure

- `index.jsx` — Main React component for the page. Uses shared navigation and footer from the dashboard for UI consistency. The table is currently populated with static JSON data for demonstration.
- `index.css` — Page-specific styles for the table and controls. Keeps styles modular and isolated from the dashboard.

## Integration Points for Backend Developers

- **Dynamic Data:**
  - The table data is currently hardcoded as a JSON array in `index.jsx`.
  - To connect to backend APIs, replace the static array with data fetched from your backend (e.g., using `useEffect` and `fetch`/`axios`).
  - Each row can include a PDF link or flag; update the JSON structure as needed to match backend responses.

- **API Endpoints:**
  - Add your API calls in `index.jsx` where the table data is defined.
  - Example:
    ```js
    // useEffect(() => {
    //   fetch('/api/appeals')
    //     .then(res => res.json())
    //     .then(data => setTableData(data));
    // }, []);
    ```

- **Styling:**
  - All styles specific to this page are in `index.css`.
  - Shared styles (navbar, footer) are imported from the dashboard module.

- **Extending the Table:**
  - Add or remove columns as needed by updating the table header and row rendering in `index.jsx`.
  - For actions (e.g., download PDF), add buttons or links in the last column.

## Contact
For questions or integration help, contact the frontend team. 