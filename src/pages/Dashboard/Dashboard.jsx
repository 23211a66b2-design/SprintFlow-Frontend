import DashboardLayout from "../../layouts/DashboardLayout";
import StatsCards from "../../components/dashboard/StatsCards";
import SprintChart from "../../components/dashboard/SprintChart";
import PieChartCard from "../../components/dashboard/PieChartCard";
import RecentProjects from "../../components/dashboard/RecentProjects";
import RecentTasks from "../../components/dashboard/RecentTasks";

function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        Welcome to SprintFlow 🚀
      </h1>

      <StatsCards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

        <SprintChart />

        <PieChartCard />

      </div>

      {/* Recent Projects */}
      <div className="mt-8">

        <RecentProjects />

      </div>

      {/* Recent Tasks */}
      <div className="mt-8">

        <RecentTasks />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;