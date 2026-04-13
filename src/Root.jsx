import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import MainLayout from "./MainLayout";
import InstallationPage from "./pages/InstallationPage";
import AppsDetails from "./pages/AppsDetails";
import AppsPage from "./pages/AppsPage";
import ErrorPage from "./pages/ErrorPage";
import ErrorAppPage from "./pages/ErrorAppPage";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader:()=> fetch('/data.json'),
                Component: HomePage,
            },
            {
               path: 'apps',
               loader:()=> fetch('/data.json'),
               Component: AppsPage,
            },
            {
                path: 'appdetails/:id',
                loader:()=> fetch('/data.json'),
                Component: AppsDetails,
            },
            {
                path: 'apps/*',
                Component: ErrorAppPage,
            },
            {
                path: 'installation',
                Component: InstallationPage,

            },
            {
                path: '*',
                Component: ErrorPage,
            }
        ],
        
    }
])