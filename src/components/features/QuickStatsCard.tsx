import React from 'react';
import Card from '@/components/ui/Card';
import StatItem from './StatItem';

interface QuickStatsCardProps {
  rank: string;
  percentile: string;
  score: string;
  totalQuestions: number;
}

const QuickStatsCard: React.FC<QuickStatsCardProps> = ({
  rank,
  percentile,
  score,
  totalQuestions
}) => {
  return (
    <Card>
      <h3 className="text-lg font-bold mb-4">Quick Statistics</h3>
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        <StatItem
          iconSrc="/icons/trophy.jpg"
          iconAlt="Rank icon"
          value={rank}
          label="Your Rank"
        />
        <StatItem
          iconSrc="/icons/notepad.jpg"
          iconAlt="Percentile icon"
          value={`${percentile}%`}
          label="Percentile"
        />
        <StatItem
          iconSrc="/icons/checkbox.png"
          iconAlt="Correct answers icon"
          value={`${score} / ${totalQuestions}`}
          label="Correct Answers"
        />
      </div>
    </Card>
  );
};

export default QuickStatsCard;