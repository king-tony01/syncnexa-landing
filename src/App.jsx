import { Suspense, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Header from "./Header";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./Home";

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
    </NetworkContext.Provider>
  );
}

export default router;
