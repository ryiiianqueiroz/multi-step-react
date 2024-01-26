import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Step1 from './components/step1'
import Step2 from './components/step2.jsx'
import Step3 from './components/step3.jsx'
import Step4 from './components/step4.jsx'
import Step5 from './components/step5.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'

const router = createBrowserRouter([
  {
    path: "/multi-step-react/",
    element: <App/>,
    children: [
      {
        path: "/multi-step-react/",
        element: <Step1/>
      },
      {
        path: "/multi-step-react/step2",
        element: <Step2/>
      },
      {
        path: "/multi-step-react/step3",
        element: <Step3/>
      },
      {
        path: "/multi-step-react/step4",
        element: <Step4/>
      },
      {
        path: "/multi-step-react/step5",
        element: <Step5/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
