import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TrendAnalysis = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Live Plants',
        data: [1000, 990, 985, 975, 960, 950],
        borderColor: '#6F8F3F',
        backgroundColor: '#6F8F3F',
      },
      {
        label: 'Dead Plants',
        data: [0, 10, 15, 25, 40, 50],
        borderColor: '#804E49',
        backgroundColor: '#804E49',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Plant Survival Trend',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent">Trend Analysis</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default TrendAnalysis; 