import { motion} from 'framer-motion';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CalendarIcon,
  UsersIcon,
  MapPinIcon
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
        <div>
          <h2 className="text-3xl font-bold text-accent">Coffee Plant Dashboard</h2>
          <p className="text-gray-500 mt-1">Overview of your coffee plantation</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarIcon className="w-4 h-4" />
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-xl">
              <UsersIcon className="w-6 h-6 text-green-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-800">Total Beneficiaries</p>
              <p className="text-2xl font-bold text-green-900">3,000</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-100"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-xl">
              <MapPinIcon className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-800">Total Plots</p>
              <p className="text-2xl font-bold text-blue-900">3,000</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-xl">
              <ChartBarIcon className="w-6 h-6 text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-800">Total Plants</p>
              <p className="text-2xl font-bold text-purple-900">3,000,000</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Plant Status Card */}
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
      >
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-gray-800">Plant Health Overview</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">95% Success Rate</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700">Healthy Plants</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-green-600">2,850,000</span>
                <span className="text-sm text-gray-500">95% of total plants</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ArrowTrendingDownIcon className="w-5 h-5 text-red-500" />
                <span className="font-medium text-gray-700">Dead Plants</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-red-600">150,000</span>
                <span className="text-sm text-gray-500">5% of total plants</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5 text-blue-500" />
                <span className="font-medium text-gray-700">Growth Rate</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-blue-600">98%</span>
                <span className="text-sm text-gray-500">Average growth rate</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">Average Plant Age</p>
                <p className="text-lg font-semibold text-gray-800">6 months</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">Average Height</p>
                <p className="text-lg font-semibold text-gray-800">1.5 meters</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">Survival Rate</p>
                <p className="text-lg font-semibold text-gray-800">95%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">Expected Yield</p>
                <p className="text-lg font-semibold text-gray-800">High</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard; 