import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.tsx'
import Profile from './pages/Profile.tsx'
import Analytics from './pages/Analytics.tsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        { index: true, element: <Analytics/> },
        { path: "profile", element: <Profile/> } // Remove leading slash
      ],
      errorElement: <NotFound/>
    }
  ],
  {
    basename: import.meta.env.BASE_URL // Add this
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
