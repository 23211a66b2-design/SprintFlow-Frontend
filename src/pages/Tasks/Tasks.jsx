import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../../layouts/DashboardLayout";
import TaskTable from "./TaskTable";
import CreateTaskModal from "./CreateTaskModal";
import EditTaskModal from "./EditTaskModal";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../../services/taskService";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Load Tasks
  const loadTasks = async () => {

    try {

      const data = await getTasks();

      setTasks(data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load tasks");

    }

  };

  useEffect(() => {

    loadTasks();

  }, []);

  // Create Task
  const handleCreateTask = async (task) => {

    try {

      await createTask(task);

      toast.success("Task created successfully!");

      setShowCreateModal(false);

      loadTasks();

    } catch (error) {

      console.error(error);

      toast.error("Failed to create task");

    }

  };

  // Edit
  const handleEditClick = (task) => {

    setSelectedTask(task);

    setShowEditModal(true);

  };

  // Update
  const handleUpdateTask = async (task) => {

    try {

      await updateTask(task.id, task);

      toast.success("Task updated successfully!");

      setShowEditModal(false);

      setSelectedTask(null);

      loadTasks();

    } catch (error) {

      console.error(error);

      toast.error("Failed to update task");

    }

  };

  // Delete
  const handleDeleteTask = async (id) => {

    if (!window.confirm("Delete this task?")) return;

    try {

      await deleteTask(id);

      toast.success("Task deleted successfully!");

      loadTasks();

    } catch (error) {

      console.error(error);

      toast.error("Delete failed");

    }

  };

  return (

    <DashboardLayout>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Tasks
        </h1>

        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          + New Task
        </button>

      </div>

      <TaskTable
        tasks={tasks}
        onEdit={handleEditClick}
        onDelete={handleDeleteTask}
      />

      <CreateTaskModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateTask}
      />

      <EditTaskModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false);
          setSelectedTask(null);
        }}
        task={selectedTask}
        onUpdate={handleUpdateTask}
      />

    </DashboardLayout>

  );

}

export default Tasks;