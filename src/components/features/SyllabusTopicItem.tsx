import React from 'react';
import ProgressBar from '@/components/ui/ProgressBar';

interface SyllabusTopicItemProps {
  name: string;
  percentage: number;
}

const getProgressBarColor = (percentage: number): string => {
  if (percentage >= 90) return 'bg-green-600';
  if (percentage >= 70) return 'bg-blue-600';
  if (percentage >= 50) return 'bg-orange-500';
  return 'bg-red-500';
};


const SyllabusTopicItem: React.FC<SyllabusTopicItemProps> = ({ name, percentage }) => {
  const barColor = getProgressBarColor(percentage); 

  return (
    <div>
      <div className="flex justify-between items-center mb-1 text-green-600">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className={`text-sm font-semibold ${barColor.replace('bg-', 'text-')}`}>{percentage}%</span>
      </div>
      <ProgressBar percentage={percentage} color={barColor} />
    </div>
  );
};

export default SyllabusTopicItem;