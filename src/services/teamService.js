import api from "./api";

// Get all team members
export const getTeamMembers = async () => {
  const response = await api.get("/team");
  return response.data;
};

// Create team member
export const createTeamMember = async (member) => {
  const response = await api.post("/team", member);
  return response.data;
};

// Update team member
export const updateTeamMember = async (id, member) => {
  const response = await api.put(`/team/${id}`, member);
  return response.data;
};

// Delete team member
export const deleteTeamMember = async (id) => {
  await api.delete(`/team/${id}`);
};