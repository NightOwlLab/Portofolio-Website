import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";

const mainRoutes = [
  {
    path: "/",
    element: <Main />
  }
];

const router = createBrowserRouter([
  {
    path: "*",
    element: <>404 Not Found</>
  },
  {
    element: <MainLayout />,
    children: mainRoutes
  }
]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AppRouter;
