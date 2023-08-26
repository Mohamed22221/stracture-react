import { createBrowserRouter } from "react-router-dom";
import App from "./pages/app";
import HomePage from "./pages";
import AboutPage from "./pages/about";
import ErrorPage from "./pages/404";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },

]);