import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/home';
import QuizDetail from '../pages/quiz-details';
import QuizQuestion from '../pages/quiz-questions';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/quiz-details/:topic",
        element: <QuizDetail />
    },
    {
        path: "/quiz-question/:topic",
        element: <QuizQuestion />
    },
])

export default router;