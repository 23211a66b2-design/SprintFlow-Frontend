import { FaBell, FaUserCircle } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";

function Navbar() {

  return (

    <div className="bg-white shadow-md p-5 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-gray-700">

        Dashboard

      </h1>

      <div className="flex items-center gap-6">

        <ThemeToggle />

        <FaBell
          size={22}
          className="text-gray-600 cursor-pointer"
        />

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={34}
            className="text-blue-600"
          />

          <div>

            <p className="font-semibold">

              Dedipya

            </p>

            <p className="text-sm text-gray-500">

              Administrator

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Navbar;