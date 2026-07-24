import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

function RecentProjects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    const loadProjects = async () => {

      try {

        const data = await getProjects();

        setProjects(data);

      } catch (error) {

        console.error(error);

      }

    };

    loadProjects();

  }, []);

  return (

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Recent Projects
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b border-gray-300 dark:border-gray-700 text-left text-gray-700 dark:text-gray-200">

            <th className="py-3">
              Project
            </th>

            <th>
              Status
            </th>

            <th>
              Start Date
            </th>

          </tr>

        </thead>

        <tbody>

          {projects.length === 0 ? (

            <tr>

              <td
                colSpan="3"
                className="text-center py-6 text-gray-500 dark:text-gray-300"
              >
                No Projects Found
              </td>

            </tr>

          ) : (

            projects.slice(0, 5).map((project) => (

              <tr
                key={project.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >

                <td className="py-4 font-medium text-gray-800 dark:text-white">
                  {project.projectName}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {project.status}
                </td>

                <td className="text-gray-700 dark:text-gray-300">
                  {project.startDate}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default RecentProjects;