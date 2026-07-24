import { useEffect, useState } from "react";
import { FaCheckCircle, FaClock, FaSpinner } from "react-icons/fa";
import { getTasks } from "../../services/taskService";

function RecentTasks() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const loadTasks = async () => {

      try {

        const data = await getTasks();

        setTasks(data);

      } catch (error) {

        console.error(error);

      }

    };

    loadTasks();

  }, []);

  const getIcon = (status) => {

    switch (status) {

      case "COMPLETED":
        return <FaCheckCircle className="text-green-500" />;

      case "IN_PROGRESS":
        return <FaSpinner className="text-blue-500" />;

      default:
        return <FaClock className="text-orange-500" />;

    }

  };

  return (

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Recent Tasks
      </h2>

      <div className="space-y-4">

        {tasks.length === 0 ? (

          <p className="text-gray-500 dark:text-gray-300">
            No Tasks Found
          </p>

        ) : (

          tasks.slice(0, 5).map((task) => (

            <div
              key={task.id}
              className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3"
            >

              <div className="flex items-center gap-3">

                {getIcon(task.status)}

                <div>

                  <p className="font-semibold text-gray-800 dark:text-white">
                    {task.taskName}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {task.status}
                  </p>

                </div>

              </div>

              <p className="text-sm text-gray-500 dark:text-gray-300">
                {task.dueDate}
              </p>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default RecentTasks;