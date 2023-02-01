import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

//Layout
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";

//Pages
import Home from "./pages/Home";
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* This a kind of parente componente for multiples different routers component */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
