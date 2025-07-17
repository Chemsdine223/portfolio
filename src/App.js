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
import PaymentMethods from "./Pages/payment_methods";
import SedadBank from "./Pages/sedad_bank";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Routes using MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
        </Route>

        {/* Standalone route without layout */}
        <Route path="/next-payment" element={<PaymentMethods />} />
        <Route path="/next-payment/sedadbank" element={<SedadBank />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
