import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./i18n.tsx";
import App from "./App.tsx";
import "./index.css";
import { SkeletonTheme } from "react-loading-skeleton";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SkeletonTheme baseColor="#e2e2e2" highlightColor="#c2c2c2">
    <Suspense fallback="loading">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Suspense>
  </SkeletonTheme>
);
