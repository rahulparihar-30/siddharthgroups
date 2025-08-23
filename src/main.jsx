import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styling/index.css'
import App from './App.jsx'
import './fonts.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Main from './SidConstruction/Main.jsx'
import { Home } from 'lucide-react'
import Projects from './SidConstruction/Projects.jsx'
import AppHome from './SidConstruction/AppHome.jsx'


const router = createBrowserRouter([{
  path:"",
  element:<App/>,
},{
  path:"/sid-construction",
  element:<Main/>,
  children:[{
    path:"",
    element:<AppHome/>
  },
    {
      path:"projects",
      element:<Projects/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
