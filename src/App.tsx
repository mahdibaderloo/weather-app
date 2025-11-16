import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import Map from "./pages/Map";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cities", element: <Cities /> },
  { path: "/map", element: <Map /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/settings", element: <Settings /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
