import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 w-full shadow-md z-50">
      <div className="flex justify-between items-center p-4 md:px-8">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-36" />
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </div>
          )}
        </button>
        <ul
          className={`md:flex gap-6 text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent transition-transform duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="on-going"
              smooth={true}
              duration={300}
              className="block p-4 md:p-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Ongoing Startupathon
            </Link>
          </li>
          <li>
            <Link
              to="completed"
              smooth={true}
              duration={300}
              className="block p-4 md:p-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Completed Startupathon
            </Link>
          </li>
          <li>
            <Link
              to="guide"
              smooth={true}
              duration={300}
              className="block p-4 md:p-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Startupathon Guide
            </Link>
          </li>
          <li>
            <Link
              to="win"
              smooth={true}
              duration={300}
              className="block p-4 md:p-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              How to Win
            </Link>
          </li>
          <li>
            <Link
              to="mentors"
              smooth={true}
              duration={300}
              className="block p-4 md:p-0 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Mentor Network
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
