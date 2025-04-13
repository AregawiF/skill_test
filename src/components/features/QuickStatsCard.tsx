import React from 'react';
import Card from '@/components/ui/Card';
import StatItem from './StatItem';

const QuickStatsCard = () => {
  return (
    <Card>
      <h3 className="text-base font-semibold text-gray-700 mb-4">Quick Statistics</h3>
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <StatItem
          iconSrc="/icons/trophy.jpg" 
          iconAlt="Rank icon"
          value="1"
          label="Your Rank"
        />
        <StatItem
          iconSrc="/icons/trophy.jpg" 
          iconAlt="Percentile icon"
          value="30%"
          label="Percentile"
        />
        <StatItem
          iconSrc="/icons/trophy.jpg" 
          iconAlt="Correct answers icon"
          value="10 / 15"
          label="Correct Answers"
        />
      </div>
    </Card>
  );
};

export default QuickStatsCard;