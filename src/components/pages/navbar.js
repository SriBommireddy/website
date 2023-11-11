
const navbar = ({ setActiveTab }) => {

  const openResumePDF = () => {
    console.log('Opening PDF');
    window.open(`${window.location.origin}/Sri.pdf`, '_blank');
  };
  return (
    <nav className="px-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 h-12 grid content-center">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <a href="#" className="flex items-center">
          <span
            className="md:ml-10 self-center text-lg whitespace-nowrap dark:text-white text-slate-200 font-serif"
            onClick={() => setActiveTab("home")}
          >
            Sri Sruthi Bommireddy
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
          aria-controls="navbar-multi-level"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="hidden w-full md:block md:w-auto md:mr-5"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white  md:dark:bg-transparent"
                onClick={() => setActiveTab("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white  md:dark:bg-transparent"
                onClick={() => setActiveTab("work")}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white  rounded md:bg-transparent  md:p-0 md:dark:text-white  md:dark:bg-transparent"
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </a>
            </li>
            <li>
            <button
        className="block text-xs p-1 text-white rounded md:bg-transparent border border-white md:dark:text-white md:dark:bg-transparent"
        onClick={openResumePDF}
      >
        Resume
      </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
