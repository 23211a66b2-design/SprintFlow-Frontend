import api from "./api";

// Get all sprints
export const getSprints = async () => {
  const response = await api.get("/sprints");
  return response.data;
};

// Create sprint
export const createSprint = async (sprint) => {
  const response = await api.post("/sprints", sprint);
  return response.data;
};

// Update sprint
export const updateSprint = async (id, sprint) => {
  const response = await api.put(`/sprints/${id}`, sprint);
  return response.data;
};

// Delete sprint
export const deleteSprint = async (id) => {
  await api.delete(`/sprints/${id}`);
};