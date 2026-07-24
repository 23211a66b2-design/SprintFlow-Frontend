import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import TeamTable from "./TeamTable";
import CreateTeamModal from "./CreateTeamModal";
import EditTeamModal from "./EditTeamModal";

import {
  getTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../../services/teamService";

function Team() {

  const [members, setMembers] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  // Load Team Members
  const loadMembers = async () => {

    try {

      const data = await getTeamMembers();

      setMembers(data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load team members");

    }

  };

  useEffect(() => {

    loadMembers();

  }, []);

  // Create Member
  const handleCreateMember = async (member) => {

    try {

      await createTeamMember(member);

      toast.success("Team member added successfully!");

      setShowCreateModal(false);

      loadMembers();

    } catch (error) {

      console.error(error);

      toast.error("Failed to create team member");

    }

  };

  // Edit
  const handleEditClick = (member) => {

    setSelectedMember(member);

    setShowEditModal(true);

  };

  // Update Member
  const handleUpdateMember = async (member) => {

    try {

      await updateTeamMember(member.id, member);

      toast.success("Team member updated successfully!");

      setShowEditModal(false);

      setSelectedMember(null);

      loadMembers();

    } catch (error) {

      console.error(error);

      toast.error("Failed to update team member");

    }

  };

  // Delete Member
  const handleDeleteMember = async (id) => {

    if (!window.confirm("Delete this team member?")) return;

    try {

      await deleteTeamMember(id);

      toast.success("Team member deleted successfully!");

      loadMembers();

    } catch (error) {

      console.error(error);

      toast.error("Delete failed");

    }

  };

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Team
        </h1>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + Add Member
        </button>

      </div>

      <TeamTable
        members={members}
        onEdit={handleEditClick}
        onDelete={handleDeleteMember}
      />

      <CreateTeamModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateMember}
      />

      <EditTeamModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedMember(null);
        }}
        member={selectedMember}
        onUpdate={handleUpdateMember}
      />

    </DashboardLayout>

  );

}

export default Team;