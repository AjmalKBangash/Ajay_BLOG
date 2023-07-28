import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import NavBar from "./Components/Blog/NavBar.js";
import CarouselBlog from "./Components/Blog/CarouselBlog.js";
import Footer from "./Components/Blog/Footer";
import Blog from "./Components/Blog/Blog";
import BlogDetails from "./Components/Blog/BlogDetails";
import { Container } from "react-bootstrap";

//  Enabling react_router
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const theRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} />
      <Route path="/:BlogName" element={<BlogDetails />} />
    </>

    // {/* // </BrowserRouter> */}
  )
);

function App() {
  // const [isOpen, setIsOpen] = useState("fyfyfhf");
  return (
    <div className="App">
      <RouterProvider router={theRoutes} />

      {/* <NavBar />
      <Container>
        <CarouselBlog />
        <Blog />
      </Container> */}
    </div>
  );
}

export default App;

// Layout of Apps in this Application
function Layout() {
  return (
    <>
      <NavBar />
      <Container>
        <CarouselBlog />
        <Blog />
      </Container>
      <Footer />
    </>
  );
}
