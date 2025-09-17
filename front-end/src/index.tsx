import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import { DatabaseList } from "./components/DatabaseList/DatabaseList";
import { Item } from "./components/Item/Item";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import StartUpScreen from "./components/StartUpScreen/StartUpScreen";
import MobileScreen from "./MobileScreen/MobileScreen";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<StartUpScreen />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mobile-view" element={<MobileScreen />} />
      <Route path="/home" element={<App />}>
        <Route path="/home/database" element={<DatabaseList />}>
          <Route path="/home/database/:itemTitle" element={<Item />} />
        </Route>
      </Route>
    </Route>,
  ),
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
