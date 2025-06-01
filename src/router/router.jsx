import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/jobs/:id",
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router;