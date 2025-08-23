import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styling/index.css'
import App from './App.jsx'
import './fonts.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainSid from './SidConstruction/MainSid.jsx'
import { Home } from 'lucide-react'


const router = createBrowserRouter([{
  path:"",
  element:<App/>,
},{
  path:"/sid-construction",
  element:<MainSid/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
