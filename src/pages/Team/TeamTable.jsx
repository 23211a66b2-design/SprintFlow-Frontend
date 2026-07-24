import { FaEdit, FaTrash } from "react-icons/fa";

function TeamTable({ members, onEdit, onDelete }) {

  return (

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Team Members
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-gray-300 dark:border-gray-700">

            <th className="text-left py-3 text-gray-700 dark:text-gray-200">
              Member Name
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Email
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Role
            </th>

            <th className="text-left text-gray-700 dark:text-gray-200">
              Project
            </th>

            <th className="text-center text-gray-700 dark:text-gray-200">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {members.length === 0 ? (

            <tr>

              <td
                colSpan="5"
                className="text-center py-6 text-gray-500 dark:text-gray-300"
              >
                No Team Members Found
              </td>

            </tr>

          ) : (

            members.map((member) => (

              <tr
                key={member.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >

                <td className="py-4 text-gray-800 dark:text-white">
                  {member.memberName}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {member.email}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {member.role}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {member.projectName}
                </td>

                <td className="text-center space-x-3">

                  <button
                    onClick={() => onEdit(member)}
                    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => onDelete(member.id)}
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

export default TeamTable;