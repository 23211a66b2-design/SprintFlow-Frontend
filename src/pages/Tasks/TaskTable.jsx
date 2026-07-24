import { FaEdit, FaTrash } from "react-icons/fa";

function TaskTable({ tasks, onEdit, onDelete }) {

  return (

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Tasks
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-gray-300 dark:border-gray-700">

            <th className="text-left py-3 text-gray-700 dark:text-gray-200">
              Task Name
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Description
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Project
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Priority
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Status
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Due Date
            </th>

            <th className="text-center text-gray-700 dark:text-gray-200">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {tasks.length === 0 ? (

            <tr>

              <td
                colSpan="7"
                className="text-center py-6 text-gray-500 dark:text-gray-300"
              >
                No Tasks Found
              </td>

            </tr>

          ) : (

            tasks.map((task) => (

              <tr
                key={task.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >

                <td className="py-4 text-gray-800 dark:text-white">
                  {task.taskName}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {task.description}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {task.projectName}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {task.priority}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {task.status}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {task.dueDate}
                </td>

                <td className="text-center space-x-3">

                  <button
                    onClick={() => onEdit(task)}
                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(task.id)}
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

export default TaskTable;