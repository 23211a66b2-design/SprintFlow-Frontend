import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getDashboardData } from "../../services/dashboardService";
import { useTheme } from "../../context/ThemeContext";

function SprintChart() {

  const [chartData, setChartData] = useState([]);

  const { theme } = useTheme();

  useEffect(() => {

    const loadChart = async () => {

      try {

        const data = await getDashboardData();

        setChartData([
          {
            name: "Completed",
            value: data.completedTasks,
          },
          {
            name: "Pending",
            value: data.pendingTasks,
          },
        ]);

      } catch (error) {

        console.error(error);

      }

    };

    loadChart();

  }, []);

  return (

    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">

      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        Task Status Overview
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={chartData}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke={theme === "dark" ? "#475569" : "#d1d5db"}
          />

          <XAxis
            dataKey="name"
            stroke={theme === "dark" ? "#ffffff" : "#374151"}
          />

          <YAxis
            allowDecimals={false}
            stroke={theme === "dark" ? "#ffffff" : "#374151"}
          />

          <Tooltip
            contentStyle={{
              backgroundColor:
                theme === "dark" ? "#1f2937" : "#ffffff",
              border:
                theme === "dark"
                  ? "1px solid #374151"
                  : "1px solid #d1d5db",
              color: theme === "dark" ? "#ffffff" : "#111827",
            }}
          />

          <Bar
            dataKey="value"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default SprintChart;