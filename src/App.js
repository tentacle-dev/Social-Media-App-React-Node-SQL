import Home from "./home/Home";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import Register from "./register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  }
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;

