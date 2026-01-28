import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import AuthHeaderLayout from "./layout/authHeaderLayout";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import MainHeaderLayout from "./layout/mainHeaderLayout";
import TeluBlogPage from "./pages/mainpage";
import { useDispatch, useSelector } from "react-redux";
import { checkIsUserLoggedIn } from "./redux/slices/authSlice";

function App() {
  // Make routes from authRouter
  const authRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AuthHeaderLayout />}>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          {/* All routes will be guided from the user at the login page using Navigate */}
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Route>
    )
  );
  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainHeaderLayout />}>
          <Route path="/" element={<TeluBlogPage />}></Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Route>
    )
  );
  // Dispatcher hook for calling function
  const dispatcher = useDispatch();

  // Call the function for check and update data in isLoggedIn
  dispatcher(checkIsUserLoggedIn);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Check if isLoggedIn login activity is active
  if (!isLoggedIn) {
    return <RouterProvider router={authRouter}></RouterProvider>
  }
  return <RouterProvider router={mainRouter}></RouterProvider>
}

export default App;
