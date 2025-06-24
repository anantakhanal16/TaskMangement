
import { colorMap } from './colormaps';

const StatCard = ({ title, value, color = 'blue' }) => {
  const colors = colorMap[color] || colorMap.blue;

  return (
    <div className={`${colors.bg} p-6 rounded-xl shadow-md text-center transition-transform transform hover:scale-105`}>
      <h3 className={`text-xl font-semibold mb-2 ${colors.text}`}>{title}</h3>
      <p className={`text-5xl font-bold ${colors.value} drop-shadow-sm`}>{value}</p>
    </div>
  );
};

export default StatCard;
