import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Track navbar state
  const navbarRef = useRef(null); // Reference to the navbar

  // Function to handle clicking outside the navbar
  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false); // Close navbar if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav ref={navbarRef} className={`navbar navbar-expand-lg bg-body-tertiary ${isOpen ? 'open' : ''}`}>
      <div className="container-fluid">
        <div className="d-flex flex-row justify-content-start">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)} // Toggle navbar open state
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav justify-content-center w-100">
            <li className="nav-item">
              <NavLink className="mt-2 navbar-brand nav-link" to="/">
                <img src="/MitsnaDrawLOGO2.png" className="MitsnaLogo" alt="Logo" />
              </NavLink>
            </li>
            <li className="nav-item nav-link">
              <NavLink className="mt-2 navlink" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item nav-link dropdown">
            <NavLink className={({ isActive }) =>`mt-2 navlink dropdown-toggle ${isActive ? "active-glow" : ""}`}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
              Know Us
            </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="/AboutUs">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../TeamPage/Team">
                    The Team
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../MembersPage/Members">
                    Members
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../BoardMembersPage/BoardMembers">
                    Board Members
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../MembersAchievementPage/MembersAchievements">
                    Member Achievement
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../InternPage/Intern">
                    Intern
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../SupportUsPage/SupportUs">
                    Support Us
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-link dropdown">
              <NavLink
                className="mt-2 navlink dropdown-toggle"
                to="/../EventPage/Event"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../MOTpage/MOT">
                    Massive Open Talk
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../MITpage/MIT">
                    MitSna Interactive Talk
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../TATpage/TAT">
                    Teach A Topic
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../TFMpage/TFM">
                    Teach For Manipur
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../BTDpage/BTD">
                    Beyond The Doors
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../SYEpage/SYE">
                    Share Your Experience
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-link dropdown">
              <NavLink
                className="mt-2 navlink dropdown-toggle"
                to="/../EventPage/Event"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Subsidiaries
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../MovieCorner/Movie">
                    Movie Corner
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../BookCorner/Book">
                    Book Corner
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../ScienceCorner/Science">
                    Science Corner
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../MitsnaFCpage/MitsnaFC">
                    MitSna FC
                  </NavLink>
                </li>
              </ul>
            </li>
            
            
            <li className="nav-item nav-link dropdown">
              <NavLink
                className="mt-2 navlink dropdown-toggle"
                to="/../EventPage/Event"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Rebuild Manipur
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item navlink text-dark" to="../BTSpage/BTS">
                    Back To School
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item nav-link">
              <NavLink className="mt-2 navlink" to="/JoinUs">
                Join Us
              </NavLink>
            </li>
          
            <li className="nav-item nav-link">
              <NavLink className="mt-2 contact-nav navlink" to="/contact-page">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <button className="NavDonateBtn">Donate</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
