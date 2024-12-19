import React from "react";
import "../styles/layout.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>YouTube</h3>
          <p>
            Welcome to FOOTER! Activate the Notification Bell for me 🙏 😊
          </p>
        </div>
        <div className="footer-social">
          <p>&copy; {new Date().getFullYear()} FOOTER. All rights reserved.</p>
          <p>
            Follow us on{" "}
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
