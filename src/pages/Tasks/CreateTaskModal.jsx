import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

function CreateTaskModal({ isOpen, onClose, onCreate }) {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    priority: "MEDIUM",
    status: "TODO",
    dueDate: "",
    projectId: "",
  });

  useEffect(() => {

    const loadProjects = async () => {

      try {

        const data = await getProjects();

        setProjects(data);

      } catch (error) {

        console.error(error);

      }

    };

    if (isOpen) {

      loadProjects();

    }

  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.name === "projectId"
          ? Number(e.target.value)
          : e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onCreate(formData);

  };

  return (

    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-xl transition-colors duration-300">

        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Create Task
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="taskName"
            placeholder="Task Name"
            value={formData.taskName}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            name="projectId"
            value={formData.projectId}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
          >

            <option value="">Select Project</option>

            {projects.map((project) => (

              <option
                key={project.id}
                value={project.id}
              >
                {project.projectName}
              </option>

            ))}

          </select>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
          >

            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>

          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
          >

            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="COMPLETED">COMPLETED</option>

          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
          />

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
            >
              Create Task
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default CreateTaskModal;