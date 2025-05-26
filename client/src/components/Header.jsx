import { useState } from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [notifications] = useState([
    { id: 1, message: 'New disease case reported in Plot #123' },
    { id: 2, message: 'Monthly report is ready for review' }
  ]);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-primary">KAPPI Monitoring System</h2>
            <p className="text-sm text-gray-600">Tacaongaga, Manay, Davao Oriental</p>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 text-gray-600 hover:text-primary rounded-full hover:bg-gray-100">
                <BellIcon className="h-6 w-6" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full pr-4">
                <UserCircleIcon className="h-10 w-10 text-gray-600" />
                <div>
                  <p className="text-sm font-medium">Extension Officer</p>
                  <p className="text-xs text-gray-600">John Doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 