const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent">Dashboard</h2>
      
      {/* Live/Dead Counter Widget */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray mb-4">Plant Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray">Total Plants:</span>
              <span className="font-bold">1,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray">Alive:</span>
              <span className="text-primary font-bold">950</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray">Dead:</span>
              <span className="text-accent font-bold">50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray">Mortality Rate:</span>
              <span className="font-bold">5%</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray mb-4">Disease Overview</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray">Active Cases:</span>
              <span className="font-bold text-accent">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray">Resolved:</span>
              <span className="font-bold text-primary">45</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="text-sm text-gray">
              <p>New disease case reported - Plot #123</p>
              <p className="text-xs">2 hours ago</p>
            </div>
            <div className="text-sm text-gray">
              <p>Status update - 5 plants marked as dead</p>
              <p className="text-xs">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 