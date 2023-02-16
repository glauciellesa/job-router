import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

//Layout
import HelpLayout from "./layouts/HelpLayout";
import RootLayout from "./layouts/RootLayout";
import CareersLayout from "./layouts/CareersLayout";

//Pages
import Home from "./pages/Home";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetail, { careerDetailLoader } from "./pages/careers/CareerDetail";
import CareersError from "./pages/careers/CareersError";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          {/* This a kind of parente componente for multiples different routers component */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<HelpLayout />}>
            <Route path="faq" element={<Faq />} />
            <Route
              path="contact"
              element={<Contact />}
              action={contactAction}
            />
          </Route>
          <Route
            path="careers"
            element={<CareersLayout />}
            errorElement={<CareersError />}
            //errorElement={<CareersError />} // if a error is throw inside the rout career so take this error and show the component error with the error message injected
          >
            <Route index element={<Careers />} loader={careersLoader} />
            <Route
              path=":id"
              element={<CareerDetail />}
              loader={careerDetailLoader}
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
