"use client";

import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'; // Make sure to import your App component

export default function Page() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}