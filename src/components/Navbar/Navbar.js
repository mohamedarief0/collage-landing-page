import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 1) {
        // Scrolling down
        setIsVisible(false);
      } else if (
        window.scrollY < lastScrollY &&
        lastScrollY - window.scrollY > 1
      ) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg brand-color ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div className="container-fluid justify-content-between">
        <img
          src={""}
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo03"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                கல்லூரிபற்றி
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/சங்கம்" ? "active" : ""
                }`}
                to="/சங்கம்"
              >
                சங்கம்
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/நிர்வாகிகள்" ? "active" : ""
                }`}
                to="/நிர்வாகிகள்"
              >
                நிர்வாகிகள்
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle ${
                  location.pathname === "/பட்டமளிப்புவிழா" ? "active" : ""
                }`}
                to="/பட்டமளிப்புவிழா"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                பட்டமளிப்புவிழா
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link
                    className={`dropdown-item ${
                      location.pathname === "/காணொளி" ? "active" : ""
                    }`}
                    to="/காணொளி"
                  >
                    காணொளி
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/பேராசிரியர்கள்" ? "active" : ""
                }`}
                to="/பேராசிரியர்கள்"
              >
                பேராசிரியர்கள்
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
