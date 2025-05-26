const DiseaseTracking = () => {
  const diseases = [
    {
      id: 1,
      plot: "Plot #123",
      disease: "Coffee Rust",
      status: "Active",
      reportedDate: "2024-05-25",
      severity: "High",
      affectedPlants: 5
    },
    {
      id: 2,
      plot: "Plot #145",
      disease: "Coffee Berry Disease",
      status: "Resolved",
      reportedDate: "2024-05-20",
      severity: "Medium",
      affectedPlants: 3
    }
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-accent">Disease Tracking</h2>
          <p className="text-gray-500 mt-1">Monitor and manage plant diseases across plots</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Plot</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Disease</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Reported Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Severity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray uppercase tracking-wider">Affected Plants</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {diseases.map((disease) => (
              <tr key={disease.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{disease.plot}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{disease.disease}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    disease.status === 'Active' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {disease.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{disease.reportedDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{disease.severity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{disease.affectedPlants}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiseaseTracking; 