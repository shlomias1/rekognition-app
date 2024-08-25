import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Places from "./pages/Places";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Visitors from "./pages/Visitors";
import AboutUs from "./pages/AboutUs";
import Instructors from "./pages/Instructors";
import ContactUs from "./pages/ContactUs";

import "./App.css";
import RekognitionPage from "./pages/RekognitionPage";

const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/places" element={<Places />} />
    <Route path="/visitors" element={<Visitors />} />
    <Route path="/customers" element={<Customers />} />
    <Route path="/rekognition" element={<RekognitionPage />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/instructors" element={<Instructors />} />
    <Route path="/contactus" element={<ContactUs />} />

    <Route path="*" element={<NotFound />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
