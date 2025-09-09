import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router';
import { DatabaseList } from './components/Database/Database';
import { Item } from './components/Item/Item';
import Login from './components/Login/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<App />}>
        <Route path="/database"  element={<DatabaseList list={[]} />}>
          <Route path="/database/:itemTitle" element={<Item list={[]}  />} />
      </Route>
      </Route>
  </Route>
  )
)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
