import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import Experience from "./Pages/Experience/Experience";
import Education from "./Pages/Education/Education";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
    </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
