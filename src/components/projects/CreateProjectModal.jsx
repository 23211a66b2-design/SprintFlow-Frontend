import { useState } from "react";

function CreateProjectModal({ isOpen, onClose, onCreate }) {

  const [project, setProject] = useState({
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "ACTIVE",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate(project);

    setProject({
      projectName: "",
      description: "",
      startDate: "",
      endDate: "",
      status: "ACTIVE",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-full max-w-xl shadow-2xl transition-colors duration-300">

        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Create Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={project.projectName}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={project.description}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="grid grid-cols-2 gap-4">

            <input
              type="date"
              name="startDate"
              value={project.startDate}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3"
              required
            />

            <input
              type="date"
              name="endDate"
              value={project.endDate}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3"
              required
            />

          </div>

          <select
            name="status"
            value={project.status}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3"
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="PLANNING">PLANNING</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>

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
              Create
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default CreateProjectModal;