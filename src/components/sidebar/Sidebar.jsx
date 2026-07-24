import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  FaHome,
  FaProjectDiagram,
  FaTasks,
  FaUsers,
  FaRunning,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="w-64 bg-blue-700 dark:bg-gray-950 text-white flex flex-col transition-colors duration-300">

      <div className="p-5 border-b border-blue-500 flex justify-center">

  <img
    src={logo}
    alt="SprintFlow Logo"
    className="h-16 object-contain"
  />

</div>

      <nav className="flex-1 p-4">

        <ul className="space-y-3">

          <li>

            <Link
              to="/dashboard"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-800 transition"
            >
              <FaHome />
              Dashboard
            </Link>

          </li>

          <li>

            <Link
              to="/projects"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-800 transition"
            >
              <FaProjectDiagram />
              Projects
            </Link>

          </li>

          <li>

            <Link
              to="/tasks"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-800 transition"
            >
              <FaTasks />
              Tasks
            </Link>

          </li>

          <li>

            <Link
              to="/sprints"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-800 transition"
            >
              <FaRunning />
              Sprints
            </Link>

          </li>

          <li>

            <Link
              to="/team"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 dark:hover:bg-gray-800 transition"
            >
              <FaUsers />
              Team
            </Link>

          </li>

        </ul>

      </nav>

      <div className="p-4 border-t border-blue-500 dark:border-gray-800">

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full bg-red-500 hover:bg-red-600 p-3 rounded-lg transition"
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>

  );

}

export default Sidebar;