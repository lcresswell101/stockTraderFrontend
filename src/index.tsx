import React from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import {HomePage, LoginPage} from './components/pages'

import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    }
])

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)