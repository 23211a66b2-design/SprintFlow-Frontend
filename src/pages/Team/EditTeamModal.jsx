import { useEffect, useState } from "react";
import { getProjects } from "../../services/projectService";

function EditTeamModal({ isOpen, onClose, member, onUpdate }) {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    memberName: "",
    email: "",
    role: "",
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

  useEffect(() => {

    if (member) {

      const project = projects.find(
        (p) => p.projectName === member.projectName
      );

      setFormData({
        memberName: member.memberName || "",
        email: member.email || "",
        role: member.role || "",
        projectId: project ? project.id : "",
      });

    }

  }, [member, projects]);

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

    onUpdate({

      id: member.id,

      ...formData,

    });

  };

  return (

    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-lg transition-colors duration-300">

        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Edit Team Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            name="projectId"
            value={formData.projectId}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-3"
          >

            {projects.map((project) => (

              <option
                key={project.id}
                value={project.id}
              >
                {project.projectName}
              </option>

            ))}

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

export default EditTeamModal;