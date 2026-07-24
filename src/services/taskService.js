import api from "./api";

// Get all tasks
export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data;
};

// Create task
export const createTask = async (task) => {
  const response = await api.post("/tasks", task);
  return response.data;
};

// Update task
export const updateTask = async (id, task) => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

// Delete task
export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};