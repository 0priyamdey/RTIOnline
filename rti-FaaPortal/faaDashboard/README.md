# FAA Dashboard Frontend Integration Guide

## Preview

[Dashboard Preview 1](https://drive.google.com/file/d/1Ed1542IbeCu9RofSIWWSCsJHg1vqrHVV/view?usp=sharing)

[Dashboard Preview 2](https://drive.google.com/file/d/1ca4CeQ9_3JXUR2rP9tRPUiyBXGcewvJU/view?usp=sharing)

This folder contains the main components and assets for the FAA (First Appellate Authority) Dashboard UI.

## Structure
- `Dashboard.jsx` — Main dashboard page. Handles layout, user info, and dashboard cards.
- `DashboardNavbar.jsx` — Navigation bar component.
- `DashboardFooter.jsx` — Footer component.
- `Dashboard.css` — All styles for the dashboard UI.
- `govlogo.jpg` — Government logo used in the header.

## Backend Integration Points

### 1. User Info
- **Location in code:** `Dashboard.jsx`, variable `userInfoData`
- **Fields:**
  - `publicAuthority`
  - `role`
  - `user`
- **How to connect:**
  - Replace the static `userInfoData` object with data fetched from your backend (e.g., via API ).
  - Use React's `useEffect` and `useState` to fetch and store the data.

### 2. Dashboard Cards
- **Location in code:** `Dashboard.jsx`, variable `dashboardCardsData`
- **Fields:**
  - `title` (string)
  - `value` (number)
  - The card icon is now a static SVG envelope/message icon, hardcoded in the JSX for all cards (not set via JSON).
- **How to connect:**
  - Replace the static `dashboardCardsData` array with data fetched from your backend.
  - Use React's `useEffect` and `useState` to fetch and store the data.
  - The icon is not configurable via JSON; it is hardcoded for visual consistency.

### 3. Example: Fetching Data from Backend
```jsx
import React, { useEffect, useState } from 'react';

// ... inside Dashboard component ...
const [userInfo, setUserInfo] = useState(null);
const [cards, setCards] = useState([]);

useEffect(() => {
  fetch('/api/userinfo')
    .then(res => res.json())
    .then(data => setUserInfo(data));
  fetch('/api/dashboard-cards')
    .then(res => res.json())
    .then(data => setCards(data));
}, []);
```

## Notes
- All imports are relative to this folder.
- No external UI libraries are used; all styling is in `Dashboard.css`.
- Update the API endpoints as per your backend routes.
- For questions, contact the frontend team. 