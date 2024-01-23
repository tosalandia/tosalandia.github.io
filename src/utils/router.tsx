import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/main", element: <MainPage /> },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
