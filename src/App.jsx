import { lazy, Suspense, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Header from "./Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./Pages/About"));

export const NetworkContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => setOnline(true));
    window.addEventListener("offline", () => setOnline(false));

    return () => {
      window.removeEventListener("online", () => setOnline(false));
      window.removeEventListener("offline", () => setOnline(false));
    };
  }, []);
  return (
    <NetworkContext.Provider value={{ online }}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </NetworkContext.Provider>
  );
}

export default router;
