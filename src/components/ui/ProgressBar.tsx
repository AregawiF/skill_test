import React from 'react';

interface ProgressBarProps {
  percentage: number; 
  color?: string; 
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percentage,
  color = 'bg-blue-600',
}) => {
  const validPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
      <div
        className={`${color} h-2 rounded-full`}
        style={{ width: `${validPercentage}%` }} // Set width dynamically
        role="progressbar"
        aria-valuenow={validPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

export default ProgressBar;