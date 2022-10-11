import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
            {
                index: true,
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />
            },
            {
                path: '/home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home />
            },
            {
                path: '/statistics',
                element: <Statistics />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/quiz/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Quiz />
            }
        ]
    }
]);