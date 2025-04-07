import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorLoadingPage from './pages/ErrorLoadingPage.tsx'
import ProfilePage from './pages/ProfilePage.tsx'
import AnalyticsPage from './pages/AnalyticsPage.tsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        { index: true, element: <AnalyticsPage/> },
        { path: "/profile", element: <ProfilePage/> } 
      ],
      errorElement: <ErrorLoadingPage/>
    }
  ],
  {
    basename: import.meta.env.BASE_URL
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
