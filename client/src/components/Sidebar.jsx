import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  MapIcon,
  ChartBarIcon,
  BugAntIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const navigationItems = [
  { name: 'Dashboard', path: '/', icon: HomeIcon },
  { name: 'Planting Map', path: '/map', icon: MapIcon },
  { name: 'Trend Analysis', path: '/analysis', icon: ChartBarIcon },
  { name: 'Disease Tracking', path: '/diseases', icon: BugAntIcon },
  { name: 'Reports', path: '/reports', icon: DocumentTextIcon },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      {/* Navigation */}
      <nav className="h-full flex flex-col">
        <div className="flex-1 py-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Status Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-800 mb-3">System Status</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Database</span>
                <div className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                  <span className="text-xs text-green-600">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Last Sync</span>
                <span className="text-xs text-gray-800">5 mins ago</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar; 