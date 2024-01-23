import { RouterProvider, createHashRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import RedirectPage from "../pages/RedirectPage";

const router = createHashRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/main", element: <MainPage /> },
  { path: "*", element: <RedirectPage /> },
]);

const MainRouter = () => {
  return <RouterProvider router={router} />;
};

export default MainRouter;
