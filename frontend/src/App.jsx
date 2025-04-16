import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Sidebar from "./components/Sidebar"; // if you're using one

const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <SplashScreen onLoaded={() => setLoaded(true)} />}
      {loaded && (
        <div className="flex">
          <Sidebar />
          <main className="p-6 flex-1">
            <h1 className="text-2xl font-bold">Welcome to DNSForge</h1>
            <p>Secure. Fast. Custom.</p>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
