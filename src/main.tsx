import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterForm, LoginForm } from "./components/FormComponents/index.ts";
import { Home } from "./pages/index.ts";

// redux provider
import { Provider } from 'react-redux';
import { store } from "./app/store.ts";

import {DashboardScreen} from './pages/index.ts';
import StudentDashboard from './components/ManageStudent/ManageStudent.tsx';

import {ManageStudent} from './components/ManageStudent/index.ts';
import {ManageStaff} from './components/ManageStaff/index.ts';
import {ManageAttendance} from './components/ManageAttendance/index.ts';
import {Notification} from './components/Notification/index.ts';
import {UserProfile} from './components/UserProfile/index.ts';
import {DashboardSettings} from './components/DashboardSettings/index.ts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/auth/register",
    element: <RegisterForm />
  },
  {
    path: "/auth/login",
    element: <LoginForm />
  },
  {
    path: "/dashboard",
    element: <DashboardScreen />,
    children: [
      {
        path: "manage-student",
        element: <ManageStudent />
      },
      {
        path: "manage-staff",
        element: <ManageStaff />
      },
      {
        path: "manage-attendance",
        element: <ManageAttendance />
      },
      {
        path: "notifications",
        element: <Notification />
      },
      {
        path: "account",
        element: <UserProfile />
      },
      {
        path: "setting",
        element: <DashboardSettings/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
)
