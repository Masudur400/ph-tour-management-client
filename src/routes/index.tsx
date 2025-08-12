

import App from "@/App";
import DashboardLayout from "@/components/layoutes/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./AdminSidebarItems";
import { userSidebarItems } from "./UserSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";

export const router = createBrowserRouter([
  // public routers
  {
    // element:<App></App>
    Component: App,
    path: '/',
    children: [
      {
        Component: withAuth(About),
        path: 'about'
      }
    ]
  },
  // admin dashboard routes
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: '/admin',
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems)
    ]
  },
  // user dashboard routes
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: '/user',
    children: [
      { index: true, element: <Navigate to="/user/bookings" /> },
      ...generateRoutes(userSidebarItems)
    ]
  },
  // login and register routes 
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
])