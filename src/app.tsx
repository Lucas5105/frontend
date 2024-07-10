import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage></CreateTripPage>,
  },
  {
    path: "/trips/:tripid",
    element: <TripDetailsPage></TripDetailsPage>
  },
]);

export function App() {
  return <RouterProvider router={router} />
}