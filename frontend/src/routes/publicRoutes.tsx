import { lazyLayouts } from "../layouts";
import { lazyPages } from "../pages/index";

// Export Public router
export default function PublicRoutes() {
  const { PublicLayout } = lazyLayouts;

  return {
    path: "/",
    element: <PublicLayout />,
    children: [
      // Home
      {
        path: "/",
        element: <lazyPages.HomePage />,
      },

      // Book
      {
        path: "/book",
        element: <lazyPages.BookPage />,
      },

      // Login
      {
        path: "/login",
        element: <lazyPages.LoginPage />,
      },

      // Register
      {
        path: "/register",
        element: <lazyPages.RegisterPage />,
      },

      // Error
      {
        path: "*",
        element: <lazyPages.ErrorPage />,
      },
    ],
  };
}
