
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { NextUIProvider } from "@nextui-org/react";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CreateProfile from './pages/CreateProfile.jsx';
import Perfil_cliente from "./pages/Perfil_cliente.jsx";
import Recetas_guardadas from "./components/Recetas_guardadas.jsx";
import Recetas_hechas from "./components/Recetas_hechas.jsx";
import Promociones from "./components/Promociones.jsx";
import Recetas_vista from "./pages/Recetas_vista.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/create/:profileType",
    element: <CreateProfile />
  }, {
    path: "/Recetas_vista",
    element: <Recetas_vista/>,
  },
  {
    path: "/Promociones",
    element: <Promociones />,
  },
  {
    path: "/Recetas_hechas",
    element: <Recetas_hechas />,
  },
  {
    path: "/Perfil_cliente",
    element: <Perfil_cliente />,
  },
  {
    path: "/Recetas_guardadas",
    element: <Recetas_guardadas />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* Podem fer un context per pasar el tema de (fosc a clar) */}
    <NextUIProvider>
      <ThemeProvider>
        <main className="h-dvh client-theme">
          <RouterProvider router={router} />
        </main>
      </ThemeProvider>
    </NextUIProvider>
  </>,
)
