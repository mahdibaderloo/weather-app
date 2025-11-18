import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Map from "./pages/Map";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import AppLayout from "./AppLayout";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/map", element: <Map /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/settings", element: <Settings /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// #2f0d68
