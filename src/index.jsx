import React from 'react';
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import App from './App';





// ReactDOM.render (
//   <React.StrictMode>
//       <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );
//   root.render(
//   <>
//   <RouterProvider router={router} />
//   <App/>
//   </>
//   )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
 </React.StrictMode>
);