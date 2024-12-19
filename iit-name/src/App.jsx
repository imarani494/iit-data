import React from "react";
import LMSPage from "./pages/LMSPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "./styles/theme.css"; // Global styles for light/dark mode

function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main LMS Content */}
      <LMSPage />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
