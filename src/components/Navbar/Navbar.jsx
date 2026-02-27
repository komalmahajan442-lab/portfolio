import { useEffect, useState } from "react";
import {Link} from "react-scroll";

function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);
  
  const [themeMode,setThemeMode]=useState("dark");

const  toggleTheme=()=>{
 
const newTheme = themeMode === "dark" ? "light" : "dark";
    setThemeMode(newTheme);
}

useEffect(()=>{
  const html = document.documentElement;
  if (themeMode === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}, [themeMode]);


  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-700 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4   sm:px-6 lg:px-8">
        
        <div className="flex justify-between h-16 items-center ">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="#" className="text-2xl font-bold text-indigo-400 cursor-pointer hover:text-cyan-500"
            to="home"
            smooth={true}
            duration={500}
            
            >
              KM
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden sm:flex space-x-8 dark:text-gray-300 text-gray-950  ml-auto item-ce">
            <Link href="#home" className="hover:text-indigo-400 transition"
            to="about"
            smooth="true"
            duration={500}
            >
              About
            </Link>
            <Link href="#about" className="hover:text-indigo-400 transition"
            to="education"
            smooth={true}
            duration={500}
            >
              Education
            </Link>
            <Link href="#projects" className="hover:text-indigo-400 transition"
            to="projects"
            smooth={true}
            duration={500}
            >
              Projects
            </Link>
            <Link href="#contact" className="hover:text-indigo-400 transition"
            to="contact"
            smooth={true}
            duration={500}>
              Contact
            </Link>
          </div>

          {/* THEME TOGGLE ICON */}


          <div className="flex justify-between gap-5">
          
          <div className=" cursor-pointer ml-5" onClick={toggleTheme}>
            {themeMode === "dark" ? (
              <i className="fa-solid fa-sun text-yellow-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-gray-500"></i>
            )}
          </div>

          
          <div className="hidden sm:block ">
            <a
              href="https://www.linkedin.com/in/komal-mahajan-4b4086317"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md font-medium transition"
            >
              Linkedin
            </a>
          </div>
</div>

          {/* MOBILE MENU BUTTON */}
          <div className="sm:hidden flex items-center ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800/90 backdrop-blur-md border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <Link  className="block text-gray-300 hover:text-indigo-400"
            to="about"
            smooth={true}
            duration={500}
            >
              About
            </Link>
            <Link  className="block text-gray-300 hover:text-indigo-400"
             to="education"
            smooth={true}
            duration={500}
            >
              Education
            </Link>
            <Link
              
              className="block text-gray-300 hover:text-indigo-400"
               to="projects"
            smooth={true}
            duration={500}
            >
              Projects
            </Link>
            <Link
               to="contact"
            smooth={true}
            duration={500}
              className="block text-gray-300 hover:text-indigo-400"
            >
              Contact
            </Link>
            <a
              href="https://www.linkedin.com/in/komal-mahajan-4b4086317"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-indigo-400 font-medium pt-2 border-t border-gray-700"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
