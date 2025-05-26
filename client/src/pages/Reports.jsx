const Reports = () => {
  const reports = [
    {
      id: 1,
      name: "Monthly Status Report",
      description: "Complete overview of plant health and mortality rates",
      format: "PDF",
      lastGenerated: "2024-05-25"
    },
    {
      id: 2,
      name: "Disease Incidence Summary",
      description: "Summary of all disease cases and their current status",
      format: "CSV",
      lastGenerated: "2024-05-24"
    },
    {
      id: 3,
      name: "Beneficiary Performance",
      description: "Analysis of plant survival rates by beneficiary",
      format: "PDF",
      lastGenerated: "2024-05-23"
    }
  ];

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-accent">Reports</h2>
          <p className="text-gray-500 mt-1">Generate and download detailed reports</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div key={report.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray mb-2">{report.name}</h3>
            <p className="text-gray text-sm mb-4">{report.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray">Format: {report.format}</span>
              <span className="text-gray">Generated: {report.lastGenerated}</span>
            </div>
            <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
              Generate Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports; 