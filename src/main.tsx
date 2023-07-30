import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./i18n.tsx";
import App from "./App.tsx";
import "./index.css";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Suspense fallback="loading">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Suspense>
);
