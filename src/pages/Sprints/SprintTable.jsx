import { FaEdit, FaTrash } from "react-icons/fa";

function SprintTable({ sprints, onEdit, onDelete }) {

  return (

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Sprints
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-gray-300 dark:border-gray-700">

            <th className="text-left py-3 text-gray-700 dark:text-gray-200">
              Sprint Name
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Project
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Start Date
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              End Date
            </th>

            <th className="text-center text-gray-700 dark:text-gray-200">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {sprints.length === 0 ? (

            <tr>

              <td
                colSpan="5"
                className="text-center py-6 text-gray-500 dark:text-gray-300"
              >
                No Sprints Found
              </td>

            </tr>

          ) : (

            sprints.map((sprint) => (

              <tr
                key={sprint.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >

                <td className="py-4 text-gray-800 dark:text-white">
                  {sprint.sprintName}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {sprint.projectName}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {sprint.startDate}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {sprint.endDate}
                </td>

                <td className="text-center space-x-3">

                  <button
                    onClick={() => onEdit(sprint)}
                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(sprint.id)}
                    className="text-red-600 hover:text-red-800 dark:hover:text-red-400 transition"
                  >
                    <FaTrash />
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default SprintTable;