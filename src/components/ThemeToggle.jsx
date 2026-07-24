import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  return (

    <button

      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }

      className="text-xl p-2 rounded-lg hover:bg-gray-200 transition"

    >

      {theme === "light" ? <FaMoon /> : <FaSun />}

    </button>

  );

}

export default ThemeToggle;