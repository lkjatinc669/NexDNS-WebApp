import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish(); // Call the parent to hide splash
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="glow">DNSForge</h1>
        <div className="spinner"></div>
        <p className="tagline">Resolving the net. One query at a time.</p>
      </div>
    </div>
  );
};

export default SplashScreen;
