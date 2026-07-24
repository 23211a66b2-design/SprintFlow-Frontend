import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import SprintTable from "./SprintTable";
import CreateSprintModal from "./CreateSprintModal";
import EditSprintModal from "./EditSprintModal";

import {
  getSprints,
  createSprint,
  updateSprint,
  deleteSprint,
} from "../../services/sprintService";

function Sprints() {

  const [sprints, setSprints] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedSprint, setSelectedSprint] = useState(null);

  // Load Sprints
  const loadSprints = async () => {

    try {

      const data = await getSprints();

      setSprints(data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load sprints");

    }

  };

  useEffect(() => {

    loadSprints();

  }, []);

  // Create Sprint
  const handleCreateSprint = async (sprint) => {

    try {

      await createSprint(sprint);

      toast.success("Sprint created successfully!");

      setShowCreateModal(false);

      loadSprints();

    } catch (error) {

      console.error(error);

      toast.error("Failed to create sprint");

    }

  };

  // Edit
  const handleEditClick = (sprint) => {

    setSelectedSprint(sprint);

    setShowEditModal(true);

  };

  // Update
  const handleUpdateSprint = async (sprint) => {

    try {

      await updateSprint(sprint.id, sprint);

      toast.success("Sprint updated successfully!");

      setShowEditModal(false);

      setSelectedSprint(null);

      loadSprints();

    } catch (error) {

      console.error(error);

      toast.error("Failed to update sprint");

    }

  };

  // Delete
  const handleDeleteSprint = async (id) => {

    if (!window.confirm("Delete this sprint?")) return;

    try {

      await deleteSprint(id);

      toast.success("Sprint deleted successfully!");

      loadSprints();

    } catch (error) {

      console.error(error);

      toast.error("Delete failed");

    }

  };

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Sprints
        </h1>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + New Sprint
        </button>

      </div>

      <SprintTable
        sprints={sprints}
        onEdit={handleEditClick}
        onDelete={handleDeleteSprint}
      />

      <CreateSprintModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateSprint}
      />

      <EditSprintModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedSprint(null);
        }}
        sprint={selectedSprint}
        onUpdate={handleUpdateSprint}
      />

    </DashboardLayout>

  );

}

export default Sprints;