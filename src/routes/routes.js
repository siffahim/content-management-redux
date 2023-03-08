import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import ContentList from "../Pages/Dashboard/ContentList";
import CreatePost from "../Pages/Dashboard/CreatePost";
import ContentDetail from "../Pages/Main/ContentDetail";
import Home from "../Pages/Main/Home";
import Notifications from "../Pages/Main/Notifications";
import ReadHistory from "../Pages/Main/ReadHistory";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "notifications",
                element: <Notifications />
            },
            {
                path: "read-history",
                element: <ReadHistory />
            },
            {
                path: "/contents/:contentId",
                element: <ContentDetail />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <ContentList />
            },
            {
                path: 'create-post',
                element: <CreatePost />
            },
        ]
    }
])

export default routes;

