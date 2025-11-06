import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import ProductDetailPage from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ":category",
        children: [
          { index: true, element: <CategoryPage /> },
          { path: ":productSlug", element: <ProductDetailPage /> },
        ],
      },

      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
