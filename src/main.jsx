import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './components/auth/Login.jsx'
import Error from './components/Error.jsx'
import Master from './components/layouts/Master.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Master />,
    errorElement: <Error />,
    children:[
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Login />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
