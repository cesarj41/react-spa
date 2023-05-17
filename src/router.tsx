import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path="/" element={<HomePage />} />
      <Route path="about" element={<div> About </div>} />
    </Route>
  )
);

export function Router() {
  return <RouterProvider router={router} />;
}
