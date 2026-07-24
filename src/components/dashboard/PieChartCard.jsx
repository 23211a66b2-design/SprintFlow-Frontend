import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { getDashboardData } from "../../services/dashboardService";

function PieChartCard() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const loadData = async () => {

      try {

        const dashboard = await getDashboardData();

        setData([
          {
            name: "Completed",
            value: dashboard.completedTasks || 0,
          },
          {
            name: "Pending",
            value: dashboard.pendingTasks || 0,
          },
        ]);

      } catch (error) {

        console.error(error);

      }

    };

    loadData();

  }, []);

  const COLORS = ["#22c55e", "#f97316"];

  return (

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Task Distribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}

export default PieChartCard;