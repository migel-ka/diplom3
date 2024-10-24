import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ProductCard from "./pages/Home";
import NotFound from "./pages/NotFound";
import SneakerPage from "./SneakerPage/SneakerPage";
import Loader from "./Loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        //loader: <Loader />,
        children: [
           { index: true, element: <Home />},
           { path: "ProductCard", element: <ProductCard />},
           { path: "sneaker/:id", element: <SneakerPage />},
           { path: "*", element: <NotFound />},
        ]
    }
]);

export default router;