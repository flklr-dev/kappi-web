import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center"
      >
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Plant Status Card */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Plant Status</h3>
              <ChartBarIcon className="w-6 h-6 text-green-500" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Total Plants</span>
                <span className="text-xl font-bold text-gray-800">1,000</span>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <ArrowTrendingUpIcon className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600 text-sm">Alive</span>
                  </div>
                  <span className="text-lg font-semibold text-green-500">950</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1">
                    <ArrowTrendingDownIcon className="w-4 h-4 text-red-500" />
                    <span className="text-gray-600 text-sm">Dead</span>
                  </div>
                  <span className="text-lg font-semibold text-red-500">50</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Mortality Rate</span>
                  <span className="text-lg font-semibold text-gray-800">5%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disease Overview Card */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Disease Overview</h3>
              <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-yellow-800">Active Cases</p>
                    <p className="text-2xl font-bold text-yellow-900">12</p>
                  </div>
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <ExclamationTriangleIcon className="w-8 h-8 text-yellow-700" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-green-50 rounded-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-green-800">Resolved Cases</p>
                    <p className="text-2xl font-bold text-green-900">45</p>
                  </div>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ChartBarIcon className="w-8 h-8 text-green-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Activity Card */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
        >
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
              <ClockIcon className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-red-100 rounded-lg shrink-0">
                  <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">New disease case reported</p>
                  <p className="text-sm text-gray-500">Plot #123 • 2 hours ago</p>
                </div>
              </div>
              <div className="h-px bg-gray-100" />
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-gray-100 rounded-lg shrink-0">
                  <ChartBarIcon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">Status update</p>
                  <p className="text-sm text-gray-500">5 plants marked as dead • 5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 