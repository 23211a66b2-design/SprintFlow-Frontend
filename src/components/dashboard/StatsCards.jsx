import { useEffect, useState } from "react";
import {
  FaProjectDiagram,
  FaTasks,
  FaRunning,
  FaUsers,
} from "react-icons/fa";

import { getDashboardData } from "../../services/dashboardService";

function StatsCards() {

  const [dashboard, setDashboard] = useState({
    totalProjects: 0,
    totalTasks: 0,
    totalSprints: 0,
    totalTeamMembers: 0,
  });

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const data = await getDashboardData();

        setDashboard(data);

      } catch (error) {

        console.error(error);

      }

    };

    loadDashboard();

  }, []);

  const cards = [
    {
      title: "Projects",
      value: dashboard.totalProjects,
      icon: <FaProjectDiagram size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Tasks",
      value: dashboard.totalTasks,
      icon: <FaTasks size={28} />,
      color: "bg-green-600",
    },
    {
      title: "Sprints",
      value: dashboard.totalSprints,
      icon: <FaRunning size={28} />,
      color: "bg-purple-600",
    },
    {
      title: "Team Members",
      value: dashboard.totalTeamMembers,
      icon: <FaUsers size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-gray-500 dark:text-gray-300">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-3 text-gray-900 dark:text-white">
                {card.value}
              </h2>

            </div>

            <div className={`${card.color} text-white p-4 rounded-xl`}>

              {card.icon}

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}

export default StatsCards;