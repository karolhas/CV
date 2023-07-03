// import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
