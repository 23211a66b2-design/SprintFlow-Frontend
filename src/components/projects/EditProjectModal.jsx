import { useEffect, useState } from "react";

function EditProjectModal({ isOpen, onClose, project, onUpdate }) {

  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "ACTIVE",
  });

  useEffect(() => {

    if (project) {

      setFormData({
        projectName: project.projectName || "",
        description: project.description || "",
        startDate: project.startDate || "",
        endDate: project.endDate || "",
        status: project.status || "ACTIVE",
      });

    }

  }, [project]);

  if (!isOpen) return null;

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onUpdate({
      id: project.id,
      ...formData,
    });

  };

  return (

    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 w-full max-w-xl shadow-2xl transition-colors duration-300">

        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Edit Project
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
          />

          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
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
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default EditProjectModal;