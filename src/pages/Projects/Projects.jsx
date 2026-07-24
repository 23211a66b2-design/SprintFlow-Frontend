import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import ProjectTable from "../../components/projects/ProjectTable";
import CreateProjectModal from "../../components/projects/CreateProjectModal";
import EditProjectModal from "../../components/projects/EditProjectModal";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";

function Projects() {

  const [projects, setProjects] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Load Projects
  const loadProjects = async () => {

    try {

      const data = await getProjects();

      setProjects(data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load projects");

    }

  };

  useEffect(() => {

    loadProjects();

  }, []);

  // Create Project
  const handleCreateProject = async (project) => {

    try {

      await createProject(project);

      toast.success("Project created successfully!");

      setShowCreateModal(false);

      loadProjects();

    } catch (error) {

      console.error(error);

      toast.error("Failed to create project");

    }

  };

  // Open Edit Modal
  const handleEditClick = (project) => {

    setSelectedProject(project);

    setShowEditModal(true);

  };

  // Update Project
  const handleUpdateProject = async (updatedProject) => {

    try {

      await updateProject(updatedProject.id, updatedProject);

      toast.success("Project updated successfully!");

      setShowEditModal(false);

      setSelectedProject(null);

      loadProjects();

    } catch (error) {

      console.error(error);

      toast.error("Failed to update project");

    }

  };

  // Delete Project
  const handleDeleteProject = async (id) => {

    if (!window.confirm("Delete this project?")) return;

    try {

      await deleteProject(id);

      toast.success("Project deleted successfully!");

      loadProjects();

    } catch (error) {

      console.error(error);

      toast.error("Delete failed");

    }

  };

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + New Project
        </button>

      </div>

      <ProjectTable
        projects={projects}
        onEdit={handleEditClick}
        onDelete={handleDeleteProject}
      />

      <CreateProjectModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateProject}
      />

      <EditProjectModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedProject(null);
        }}
        project={selectedProject}
        onUpdate={handleUpdateProject}
      />

    </DashboardLayout>

  );

}

export default Projects;